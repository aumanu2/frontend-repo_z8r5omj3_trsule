import React from 'react'
import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative h-[50vh] w-full">
      <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]" />
    </div>
  )
}
