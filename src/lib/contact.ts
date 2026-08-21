import { siteConfig } from "./config";

export function telHref() {
  return `tel:${siteConfig.phone}`;
}

export function smsHref(body = siteConfig.smsBody) {
  return `sms:${siteConfig.phoneDigits}?&body=${encodeURIComponent(body)}`;
}
