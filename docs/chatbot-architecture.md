# Pool Cleaning Dude — AI Chatbot Architecture

## Overview

The PCD website has an AI-powered chatbot that acts as the cartoon mascot character. It qualifies leads through conversation, collects contact info, gives pricing, and auto-submits leads to GoHighLevel CRM. Built entirely within a Next.js App Router project deployed on Vercel.

## Architecture

```
User clicks chat bubble or "Get a Free Quote" button
        ↓
ChatWidget.tsx (client component)
  - Manages chat state, messages, UI
  - Sends messages to /api/chat
        ↓
/api/chat/route.ts (Next.js API route, server-side)
  - Sends conversation to Claude Sonnet 4.6 via OpenRouter
  - System prompt contains: brand voice, pricing, service areas, qualification flow
  - After each response, server-side code scans conversation for phone numbers
  - If phone detected: extracts name, address, service from conversation history
  - Submits lead to GHL via contacts/upsert API
        ↓
GoHighLevel CRM
  - Contact created with: name, phone, address, source, tags
  - Source: "Pool Cleaning Dude Chatbot"
  - Tag: "chatbot-lead"
```

## Files

| File | Purpose |
|------|---------|
| `src/components/ChatWidget.tsx` | Client-side chat UI. Floating mascot button, chat window, message bubbles, typing indicator, proactive greeting. |
| `src/components/OpenChatButton.tsx` | Client component that dispatches a `CustomEvent("open-chat")` with `{context: "quote"}`. Used on "Get a Free Quote" buttons. |
| `src/app/api/chat/route.ts` | Server-side API route. Contains the system prompt, calls OpenRouter, parses lead info, submits to GHL. This is the brain. |
| `src/app/globals.css` | Contains `animate-fade-in` keyframe used by the chat widget. |
| `src/app/layout.tsx` | Includes `<ChatWidget />` in the body so it appears on every page. |

## How the Chat UI Works

### Entry Points
1. **Mascot bubble** (bottom-right on every page) — clicking opens chat with a random seasonal greeting.
2. **"Get a Free Quote" buttons** — dispatches a `CustomEvent("open-chat", {detail: {context: "quote"}})`. The ChatWidget listens for this event and opens with a quote-specific greeting: "Let's get you a quote. What service do you need — pool opening, weekly cleaning, or something else?"

### Proactive Greeting
- After 4 seconds on any page, a speech bubble appears above the mascot with a random greeting from the `GREETINGS` array.
- Auto-hides after 10 more seconds if not clicked.
- Greetings are seasonal and focused on pool openings (current season).

### Message Flow
1. User types message, hits send.
2. Message appended to local state, displayed immediately.
3. Full message history sent to `/api/chat` as POST.
4. Typing indicator (bouncing dots) shown while waiting.
5. Response appended to state.
6. Auto-scroll to bottom.

### UI Details
- Chat window: 340px wide (380px on sm+), 480px tall.
- Header: blue gradient with mascot avatar, title "Pool Cleaning Dude", subtitle "Your Pool Dude, at Your Service".
- User messages: sky-600 background, white text, right-aligned.
- Bot messages: gray-100 background, dark text, left-aligned with mascot avatar.
- Input: rounded text field with send button.

## How the API Route Works

### LLM Call
- Model: `anthropic/claude-sonnet-4.6` via OpenRouter API.
- Max tokens: 150 (forces short responses).
- Last 14 messages sent as context (conversation window).
- System prompt is ~150 lines covering voice rules, conversation flow, pricing, service areas, hesitation handling, and outcome selling.

### System Prompt Structure
The system prompt has these sections:
1. **VOICE** — Response length, tone, what words to avoid.
2. **CONVERSATION FLOW** — Ordered steps: service → address → area check → name → phone → pool details → price → close.
3. **RULES** — Hard constraints (area check immediately, name before price, no discounts, accept "not sure").
4. **GREETING RESPONSES** — How to handle responses to the proactive greeting.
5. **POOL OPENING PRICING** — 3 tiers x 3 gallon ranges + equipment add-ons. Sourced from `tristateaquaticsolutions/pricing/service-pricing.md`.
6. **WEEKLY MAINTENANCE PRICING** — By gallon tier, chemicals always included.
7. **OTHER PRICING** — Closing, green pool, one-time visit, drain/acid wash.
8. **SEASON PASS** — 3 tiers with pay-in-full discounts.
9. **REFERRAL & NEIGHBOR PROGRAMS** — Referral bonus, Neighbor Network discount.
10. **AREAS SERVED** — Full list of 94 towns/zips from `service-area-towns.csv`.
11. **KEY FACTS** — No contracts, CPO certified, 40 pool cap, photo reports.
12. **HESITATION HANDLING** — Scripts for "too expensive", "let me think", "not now", "I have a pool guy".
13. **OUTCOME SELLING** — Sell the result, not the process.

### Server-Side Lead Detection
The API route does NOT rely on the LLM to output a [LEAD] tag. Instead, after every response, it scans the full conversation for a phone number using regex:

```
/(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/
```

If a phone number is found, it extracts:
- **Name**: Finds a short alpha-only user message (2-30 chars, 1-3 words) that appeared right after the bot asked a question containing "name".
- **Address**: Finds a user message with a street number (`\d+\s+[a-zA-Z]`) that isn't a phone number or zip code.
- **City/zip**: Finds a user message matching any of the 94+ service area town names or a 5-digit zip code.
- **Service**: Finds a user message matching keywords like "open", "clean", "weekly", etc.

The extracted info is upserted to GHL via the contacts API.

### GHL Integration
- Endpoint: `https://services.leadconnectorhq.com/contacts/upsert`
- Auth: PIT (Private Integration Token) for the PCD sub-account.
- Location ID: `GRCLPh6B7KwWCf8PRIUt`
- Fields sent: firstName, lastName, phone, address1, source, tags, customFields.
- Source value: "Pool Cleaning Dude Chatbot"
- Tag: "chatbot-lead"
- Custom field: "contact_message" with the service they're interested in.

### Error Handling
- If OpenRouter fails, returns a friendly fallback: "Something glitched. Text Brandon at (302) 496-6367, he's got you."
- If GHL upsert fails, error is logged but chat continues normally.
- Status 200 returned even on errors so the chat UI doesn't break.

## Environment Variables

| Variable | Where Set | Purpose |
|----------|-----------|---------|
| `OPENROUTER_API_KEY` | Vercel env vars + `.env.local` | Authenticates with OpenRouter for LLM calls |

GHL credentials (PIT, location ID) are hardcoded in the API route since they don't change. If the sub-account changes, update the constants at the top of `route.ts`.

## Data Sources (External)

These files in the TSAS project are the source of truth. When they change, the chatbot system prompt needs to be re-synced:

| File | What It Contains |
|------|-----------------|
| `tristateaquaticsolutions/pricing/service-pricing.md` | All pricing (openings, weekly, closing, Season Pass, add-ons) |
| `tristateaquaticsolutions/pricing/value-articulation.md` | Sales talk tracks, objection handling scripts |
| `tristateaquaticsolutions/service-area/service-area-towns.csv` | All 94 towns/zips in the service area |

## How to Recreate This for Another Business

1. **Create the API route** (`src/app/api/chat/route.ts`):
   - Write a system prompt with: brand voice, qualification flow, pricing, service areas, objection handling.
   - Connect to an LLM via OpenRouter (or direct Anthropic/OpenAI API).
   - Add server-side lead detection (regex for phone numbers in conversation history).
   - Connect to your CRM (GHL, HubSpot, etc.) for lead submission.

2. **Create the chat widget** (`src/components/ChatWidget.tsx`):
   - Floating button with brand avatar.
   - Proactive greeting on timer.
   - Message state management.
   - POST to your API route.
   - Typing indicator.

3. **Create the quote trigger** (`src/components/OpenChatButton.tsx`):
   - Dispatches a custom event to open chat with context.
   - Use on CTA buttons throughout the site.

4. **Wire it up**:
   - Add ChatWidget to your root layout.
   - Replace "Get a Quote" links with OpenChatButton.
   - Set LLM API key as environment variable.
   - Deploy.

## Cost

- **LLM**: Claude Sonnet 4.6 via OpenRouter. ~$0.01-0.03 per conversation (150 token responses, ~10 messages per conversation).
- **GHL**: Already included in sub-account — no additional cost for the API.
- **Vercel**: API route runs as serverless function — well within free tier for a local service business.

## Key Design Decisions

1. **Server-side lead detection over LLM tags**: The LLM was unreliable at outputting [LEAD] tags. Regex-based phone detection on the server is deterministic and never misses.
2. **Short responses (150 max tokens)**: Forces the bot to be concise. Long chatbot responses feel robotic.
3. **One question per message**: Voice agent best practice adapted for text chat. Stacking questions confuses people.
4. **Price AFTER name and phone**: The price is the payoff. If you give it early, they might bounce without leaving contact info.
5. **Area check IMMEDIATELY after address**: Don't waste an out-of-area person's time collecting their whole life story.
6. **Proactive greeting with seasonal urgency**: Creates engagement without being annoying.
7. **Quote button opens chat instead of form page**: Chat qualifies better than a static form and collects more info.
