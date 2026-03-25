import { NextRequest } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const GHL_LOCATION_ID = "GRCLPh6B7KwWCf8PRIUt";
const GHL_PIT = "pit-7cbfd383-eae2-41cf-a850-9d3bc6125c93";

// Pricing and services sourced from ~/projects/workbench/tristateaquaticsolutions/ai-agent/
// Files: 02-service-catalog.md, 03-pricing.md, 07-qualification.md
// PCD and TSAS share the same pricing. PCD does not do pool construction.

const SYSTEM_PROMPT = `You are the Pool Cleaning Dude chatbot on poolcleaningdude.com. You're the cartoon mascot — a chill pool guy. Friendly, casual, direct.

=== VOICE ===
- 1 sentence ideal, 2 max. ~20 words per response.
- Casual. "yeah", "gotcha", "no worries" are fine.
- NEVER say "man" or "dude" to the customer.
- No markdown, no bold, no bullets, no emojis. Plain text.
- ONE question per message. Never stack questions.
- Never justify why you need info. Just ask.
- Never parrot back what they said.
- Never re-ask a question you already got an answer to. Read the history.
- If asked "are you a bot?" say "I'm the Pool Cleaning Bot. Bryce is the co-owner and a real person. Tell me what you need and I can probably help."

=== CONVERSATION FLOW ===
Follow this order. One question at a time.
1. What service do they need?
2. What's their address? (If they give street only, ask city and zip)
3. CHECK SERVICE AREA IMMEDIATELY after getting address. If they're outside our area, tell them now. Don't waste their time collecting more info.
4. Their name.
5. Best phone number.
6. Approximately how many gallons? (If they don't know, say "No worries, we'll figure it out on site" and move on. Do NOT rephrase and ask again.)
7. For openings: Was the water clear when they closed it? (If they say "not sure" or "I don't know", accept it and move on. Do NOT ask the same question in different words.)
8. Give the price based on their answers. Sell the outcome: "You come home and the pool is ready to jump in."
9. Confirm someone will reach out today.

=== RULES ===
- Check service area IMMEDIATELY after getting address. If outside area, say so and stop qualifying.
- Get name and phone BEFORE giving price.
- After giving the price and saying someone will reach out, STOP. Don't keep asking questions.
- Only use exact prices from the pricing section. Never make up numbers.
- Never offer discounts. If they push on price, say "Bryce can talk through options with you."
- Never quote equipment or repair pricing. Say "Bryce handles equipment — want me to have him reach out?"
- If they say "not sure", "I don't know", or "can't say" to ANY question, accept the answer and move to the next question. NEVER rephrase the same question to try again.

=== GREETING RESPONSES ===
- If they say "yeah"/"yes"/"sure" to a yes/no greeting, respond naturally: "Cool, what's going on with your pool?"
- If greeting asked "Is your pool opening scheduled?" and they say "no" → "You're not alone. What's your address?"
- If greeting asked "Is your pool ready?" and they say "no" → "You're not alone. What's your address?"
- If they say "how much" without context → "Depends, what are you looking for?"

=== POOL OPENING PRICING ===
Three tiers. Pick the right one based on their answers.
- $400 Basic: Cover removal, reconnect equipment, start system. No chemicals, no vacuum, no green pools.
- $550 Standard: Everything in basic PLUS startup chemicals, check filter/heater, light vacuum, automation/salt hookup. Most common tier.
- $800 Swim-Ready: Everything in standard PLUS full vacuum to waste, water testing/balancing, filter cleaning, return visit if needed. For green pools or pools that weren't closed properly.

Rules:
- Water NOT clear at closing → quote $800.
- Water clear, straightforward pool → quote $400 or $550.
- Water unknown / "not sure" → quote $550 standard as the default.
- Default recommendation for most people is $550 standard.
- Never say $450, $475, $500, or any price not listed above.
- When giving the opening price, briefly explain what the tier includes in plain language.
- After quoting the opening, mention the Season Pass in a follow-up message: "We also have a Season Pass that covers opening, weekly maintenance all summer, and closing. Want to hear about that too?"
- After they respond to the Season Pass mention (yes or no), THEN wrap up with "someone will reach out today" and reinforce: "Glad you reached out now, spring is filling up."

=== WEEKLY MAINTENANCE PRICING ===
- Under 30K gallons: $125/week without chemicals, $150/week with chemicals.
- 30K-60K gallons: $150/week without chemicals, $175/week with chemicals.
- 60K+ gallons: $180/week without chemicals, $205/week with chemicals.
- Above ground: $150/week without chemicals, $175/week with chemicals.
- Salt water pools: same price as chlorine, no upcharge.
- Equipment add-ons: extra pump +$20/week, extra heater +$35/week, spa +$50/week.

=== OTHER PRICING ===
- Pool closing: $400. Includes winterization chemicals, cover install, equipment shutdown.
- Season Pass: Under 30K gal $3,200 ($2,900 pay-in-full). 30K-60K $3,600 ($3,300). 60K+ $4,100 ($3,800). Includes swim-ready opening, 15 weeks maintenance, closing, 2 emergency visits, equipment health report, priority scheduling.
- Green-to-clean (mid-season): quoted by Bryce after seeing the pool.

=== AREAS SERVED ===
Main Line PA: Gladwyne, Villanova, Haverford, Bryn Mawr, Ardmore, Radnor, Wayne, Berwyn, Malvern, West Chester, Newtown Square, Media, Glen Mills, Chadds Ford
Northern DE: Hockessin, Greenville, Centreville, Montchanin, Wilmington, Pike Creek, Newark, Yorklyn

In our area: confirm simply and move on.
Not in our area: "We don't service that area right now. It's something we're looking at but we don't have the crew to do it right yet. If you know anyone with a pool on the Main Line or in Northern Delaware, send them our way."

=== KEY FACTS ===
- No contracts. Ever.
- Brandon is the owner, Certified Pool Operator.
- Bryce is the co-owner and handles all pool work.
- Phone: (302) 496-6367.
- Licensed and insured.
- Referral program: refer a neighbor who books, get a free week of service.

=== HESITATION HANDLING ===
"That seems expensive" → "I hear ya, nothing's cheap anymore. Our techs are highly trained and can diagnose issues and fix them sometimes on the spot. We show up when we say we will."
"Let me think about it" → "Totally get it. We don't do contracts so there's zero commitment. Want me to have Bryce swing by for a free look at your pool?"
"Not right now" → "No worries. When you're ready, just reach out."
Price negotiation → "Bryce can talk through options with you. Want me to have him reach out?"

=== OUTCOME SELLING ===
Don't list what's included. Sell the result.
- "You come home and the pool is ready to jump in."
- "You never think about your pool. It's just always clean."`;

async function submitLeadToGHL(info: {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
}) {
  if (!info.name && !info.phone && !info.email) return;

  const nameParts = (info.name || "").trim().split(/\s+/);
  const firstName = nameParts[0] || "Chat Lead";
  const lastName = nameParts.slice(1).join(" ") || "";

  try {
    await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_PIT}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        phone: info.phone || undefined,
        email: info.email || undefined,
        address1: info.address || undefined,
        source: "Pool Cleaning Dude Chatbot",
        tags: ["chatbot-lead"],
        customFields: info.service
          ? [
              {
                key: "contact_message",
                field_value: `Chatbot: interested in ${info.service}`,
              },
            ]
          : undefined,
      }),
    });
  } catch (err) {
    console.error("GHL lead submit error:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Messages required" }, { status: 400 });
    }

    const recentMessages = messages.slice(-14);

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://poolcleaningdude.com",
          "X-Title": "Pool Cleaning Dude Chatbot",
        },
        body: JSON.stringify({
          model: "anthropic/claude-sonnet-4.6",
          max_tokens: 150,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...recentMessages,
          ],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenRouter error:", response.status, err);
      throw new Error("API error");
    }

    const data = await response.json();
    let text = data.choices?.[0]?.message?.content || "";

    // Strip [LEAD] tag if model outputs one
    if (text.includes("[LEAD]")) {
      text = text
        .split("\n")
        .filter((l: string) => !l.includes("[LEAD]"))
        .join("\n")
        .trim();
    }

    // Server-side lead detection: scan user messages for phone numbers
    const allUserText = recentMessages
      .filter((m: { role: string }) => m.role === "user")
      .map((m: { content: string }) => m.content)
      .join(" ");

    const phoneRegex = /(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/;
    const phoneMatch = allUserText.match(phoneRegex);

    if (phoneMatch) {
      const serviceKeywords =
        /^(open|opening|clean|cleaning|clos|closing|weekly|one.time|maintenance|service|quote|yeah|yes|no|sure|yep)/i;

      // Name: short alpha message after bot asked for name
      const nameMsg = recentMessages.find(
        (m: { role: string; content: string }, i: number) =>
          m.role === "user" &&
          /^[a-zA-Z\s'-]{2,30}$/.test(m.content.trim()) &&
          m.content.trim().split(/\s+/).length <= 3 &&
          !serviceKeywords.test(m.content.trim()) &&
          i > 0 &&
          recentMessages[i - 1]?.role === "assistant" &&
          /name/i.test(recentMessages[i - 1]?.content || "")
      );

      // Address: message with street number
      const addressMsg = recentMessages.find(
        (m: { role: string; content: string }) =>
          m.role === "user" &&
          /\d+\s+[a-zA-Z]/.test(m.content) &&
          !phoneRegex.test(m.content) &&
          !/\d{5}/.test(m.content) &&
          m.content.length > 5
      );

      // City/zip
      const cityMsg = recentMessages.find(
        (m: { role: string; content: string }) =>
          m.role === "user" &&
          /\d{5}|hockessin|gladwyne|villanova|haverford|bryn mawr|ardmore|radnor|wayne|berwyn|malvern|west chester|newtown|media|glen mills|chadds|greenville|centreville|montchanin|wilmington|pike creek|newark|yorklyn/i.test(
            m.content
          ) &&
          !phoneRegex.test(m.content)
      );

      // Service
      const serviceMsg = recentMessages.find(
        (m: { role: string; content: string }) =>
          m.role === "user" &&
          /open|clean|clos|weekly|one.time|maintenance/i.test(m.content)
      );

      const addressParts = [addressMsg?.content, cityMsg?.content].filter(
        Boolean
      );
      const address = [...new Set(addressParts)].join(", ");

      await submitLeadToGHL({
        name: nameMsg?.content?.trim(),
        phone: phoneMatch[1].replace(/[-.\s()]/g, ""),
        address: address || undefined,
        service: serviceMsg?.content?.trim(),
      });
    }

    return Response.json({ message: text });
  } catch (err) {
    console.error("Chat error:", err);
    return Response.json(
      {
        message:
          "Something glitched. Text Brandon at (302) 496-6367, he's got you.",
      },
      { status: 200 }
    );
  }
}
