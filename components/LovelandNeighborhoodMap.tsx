'use client'

import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { LOVELAND_NEIGHBORHOODS, type Neighborhood } from '@/lib/neighborhoods/loveland'
import { SITE } from '@/lib/constants'

export default function LovelandNeighborhoodMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)
  const layersRef = useRef<Record<string, unknown>>({})
  const [activeNeighborhood, setActiveNeighborhood] = useState<Neighborhood | null>(null)
  const activeNeighborhoodRef = useRef<Neighborhood | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    let map: ReturnType<typeof import('leaflet')['map']>

    import('leaflet').then((L) => {
      if (!mapRef.current) return

      map = L.map(mapRef.current, {
        center: [40.394, -105.075],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
      })

      mapInstanceRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      map.on('click', () => {
        setActiveNeighborhood(null)
        activeNeighborhoodRef.current = null
      })

      LOVELAND_NEIGHBORHOODS.forEach((hood) => {
        const layer = L.polygon(hood.polygon, {
          color: hood.color,
          fillColor: hood.fillColor,
          fillOpacity: 0.28,
          weight: 2,
        }).addTo(map)

        layer.bindTooltip(
          `<div style="font-family:system-ui,sans-serif;min-width:140px;">
            <strong style="display:block;font-size:14px;color:#3a3a3c;margin-bottom:2px;">${hood.name}</strong>
            <span style="font-size:12px;color:#6b7280;">${hood.priceRange}</span>
          </div>`,
          { sticky: true, direction: 'top', offset: [0, -4] }
        )

        layer.on('mouseover', function (this: typeof layer) {
          if (activeNeighborhoodRef.current?.id !== hood.id) {
            this.setStyle({ fillOpacity: 0.45, weight: 3 })
          }
        })

        layer.on('mouseout', function (this: typeof layer) {
          if (activeNeighborhoodRef.current?.id !== hood.id) {
            this.setStyle({ fillOpacity: 0.28, weight: 2 })
          }
        })

        layer.on('click', function (this: typeof layer, e) {
          L.DomEvent.stopPropagation(e)
          // Reset all layers
          LOVELAND_NEIGHBORHOODS.forEach((h) => {
            const l = layersRef.current[h.id] as typeof layer
            if (l) l.setStyle({ fillOpacity: 0.28, weight: 2 })
          })
          this.setStyle({ fillOpacity: 0.55, weight: 3 })
          setActiveNeighborhood(hood)
          activeNeighborhoodRef.current = hood
          map.flyToBounds(this.getBounds(), { padding: [40, 40], duration: 0.5 })
        })

        layersRef.current[hood.id] = layer
      })
    })

    return () => {
      if (mapInstanceRef.current) {
        ;(mapInstanceRef.current as { remove: () => void }).remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  function focusNeighborhood(hood: Neighborhood) {
    import('leaflet').then((L) => {
      const layer = layersRef.current[hood.id] as ReturnType<typeof L.polygon>
      if (!layer || !mapInstanceRef.current) return
      LOVELAND_NEIGHBORHOODS.forEach((h) => {
        const l = layersRef.current[h.id] as typeof layer
        if (l) l.setStyle({ fillOpacity: 0.28, weight: 2 })
      })
      layer.setStyle({ fillOpacity: 0.55, weight: 3 })
      ;(mapInstanceRef.current as ReturnType<typeof L.map>).flyToBounds(layer.getBounds(), {
        padding: [60, 60],
        duration: 0.8,
      })
      setActiveNeighborhood(hood)
      activeNeighborhoodRef.current = hood
    })
  }

  function scrollToMap() {
    document.getElementById('neighborhood-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* MAP + SIDEBAR */}
      <div id="neighborhood-map" className="relative" style={{ height: '580px' }}>
        <div ref={mapRef} style={{ height: '100%', width: '100%' }} />

        {/* Sidebar */}
        <aside
          className={`absolute top-0 right-0 h-full bg-white shadow-2xl z-[999] flex flex-col overflow-hidden transition-transform duration-300 ${
            activeNeighborhood ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '380px' }}
        >
          {activeNeighborhood && (
            <>
              {/* Sidebar header */}
              <div className="bg-charcoal px-5 py-4 flex items-start justify-between gap-3 shrink-0">
                <div>
                  <p className="font-heading font-700 text-lg text-white leading-tight">
                    {activeNeighborhood.name}
                  </p>
                  <p className="font-sans text-xs text-white/60 mt-1 tracking-wide">
                    {activeNeighborhood.tagline}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveNeighborhood(null)
                    activeNeighborhoodRef.current = null
                  }}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white shrink-0 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5">
                {/* Price */}
                <span className="inline-flex items-center gap-2 bg-gold/15 text-amber-800 border border-gold/30 rounded-full px-4 py-1.5 text-sm font-heading font-600">
                  {activeNeighborhood.priceRange}
                </span>

                {/* Vibe */}
                <div>
                  <p className="font-sans text-xs font-700 uppercase tracking-widest text-gray-400 mb-2">
                    Neighborhood Vibe
                  </p>
                  <p className="font-sans text-sm text-charcoal leading-relaxed">
                    {activeNeighborhood.vibe}
                  </p>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Ideal For */}
                <div>
                  <p className="font-sans text-xs font-700 uppercase tracking-widest text-gray-400 mb-2">
                    Ideal For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeNeighborhood.idealFor.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-charcoal rounded-full px-3 py-1 text-xs font-sans font-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outdoor Access */}
                <div>
                  <p className="font-sans text-xs font-700 uppercase tracking-widest text-gray-400 mb-2">
                    Outdoor Access
                  </p>
                  <p className="font-sans text-sm text-charcoal leading-relaxed">
                    {activeNeighborhood.outdoors}
                  </p>
                </div>

                {/* Schools */}
                <div>
                  <p className="font-sans text-xs font-700 uppercase tracking-widest text-gray-400 mb-2">
                    Schools
                  </p>
                  <ul className="space-y-1.5">
                    {activeNeighborhood.schools.map((school) => (
                      <li
                        key={school}
                        className="flex items-center gap-2 font-sans text-sm text-charcoal"
                      >
                        <div className="w-4 h-4 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                          <svg className="w-2.5 h-2.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {school}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Commute */}
                <div>
                  <p className="font-sans text-xs font-700 uppercase tracking-widest text-gray-400 mb-2">
                    Commute Context
                  </p>
                  <p className="font-sans text-sm text-charcoal leading-relaxed">
                    {activeNeighborhood.commute}
                  </p>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Michael's Take */}
                <div className="bg-gold/10 border-l-4 border-gold rounded-r-xl px-4 py-3">
                  <p className="font-sans text-xs font-700 uppercase tracking-widest text-gold mb-2">
                    Michael's Take
                  </p>
                  <p className="font-sans text-sm text-charcoal leading-relaxed italic">
                    "{activeNeighborhood.michaelsTake}"
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Ask Michael About This Area
                </a>
              </div>
            </>
          )}
        </aside>
      </div>

      {/* NEIGHBORHOOD CARDS */}
      <section className="section-sage py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="section-heading">All Loveland Neighborhoods</h2>
            <p className="section-subheading">
              Click any card to highlight it on the map and see full details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOVELAND_NEIGHBORHOODS.map((hood) => (
              <button
                key={hood.id}
                onClick={() => {
                  focusNeighborhood(hood)
                  scrollToMap()
                }}
                className="card p-6 text-left group flex flex-col gap-3 hover:border-gold hover:shadow-md transition-all duration-200"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                      style={{ backgroundColor: hood.fillColor }}
                    />
                    <p className="font-heading font-700 text-base text-charcoal group-hover:text-teal transition-colors leading-tight">
                      {hood.name}
                    </p>
                  </div>
                  <span className="shrink-0 bg-gold/15 text-amber-800 rounded-full px-3 py-0.5 text-xs font-heading font-600 whitespace-nowrap">
                    {hood.priceRange}
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-sans text-xs text-sage font-500 tracking-wide uppercase">
                  {hood.tagline}
                </p>

                {/* Vibe excerpt */}
                <p className="font-sans text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {hood.vibe}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {hood.idealFor.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-500 rounded-full px-2.5 py-0.5 text-xs font-sans font-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-sans text-xs font-600 text-teal flex items-center gap-1 mt-1">
                  View on map
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
