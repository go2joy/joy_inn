const script = document.createElement("script");
script.src = `https://www.googletagmanager.com/gtag/js?id=AW-10946364392`;
script.async = true;

// Append the 'script' element to 'head'
document.head.appendChild(script);
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-10946364392");

// Event snippet for Submit lead form conversion page
gtag("event", "conversion", { send_to: "AW-10946364392/gk9LCM7voeUDEOiH0eMo" });
