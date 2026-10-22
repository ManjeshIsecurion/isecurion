"use client";

export default function Location() {
  const address =
    "ISECURION Technology & Consulting Pvt Ltd, 2nd Floor, 670 6th Main Road, Opp. Elita Promenade, RBI Layout, JP Nagar 7th Phase, Bengaluru, Karnataka 560078";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section>
      <div className="h-full">
        <div className="gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[#000C1C]">
          {/* Google Maps */}
          <div>
            <iframe
              src={mapUrl}
              title="ISECURION Bengaluru Office Location"
              width="100%"
              height="100%"
              style={{ minHeight: "750px", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
