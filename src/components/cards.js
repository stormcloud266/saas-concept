import React from "react"
import { Features, FeaturesInner } from "@styles/sections"
import { Card } from "@styles/elements"
import { Logo } from '@images/icons'

const Cards = () => (
  <Features>
    <FeaturesInner>

      <Card>
      <svg
        className="prefix__icon prefix__icon-tabler prefix__icon-tabler-anchor"
        width={56}
        height={56}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#de4771"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M12 9v12m-8-8a8 8 0 0016 0m1 0h-2M5 13H3" />
        <circle cx={12} cy={6} r={3} />
      </svg>
        <h3>We Sure</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus necessitatibus repellendus blanditiis hic ipsum excepturi fugit nobis.</p>
      </Card>

      <Card>
      <svg
        className="prefix__icon prefix__icon-tabler prefix__icon-tabler-aperture"
        width={56}
        height={56}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#de4771"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx={12} cy={12} r={9} />
        <path d="M3.6 15h10.55M6.551 4.938l3.26 10.034M17.032 4.636l-8.535 6.2M20.56 14.51l-8.536-6.2M12.257 20.916l3.26-10.034" />
      </svg>
        <h3>Love Gradients</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus necessitatibus repellendus blanditiis hic ipsum excepturi fugit nobis.</p>
      </Card>

      <Card>
      <svg
        className="prefix__icon prefix__icon-tabler prefix__icon-tabler-ghost"
        width={56}
        height={56}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#de4771"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M5 11a7 7 0 0114 0v7a1.78 1.78 0 01-3.1 1.4 1.65 1.65 0 00-2.6 0 1.65 1.65 0 01-2.6 0 1.65 1.65 0 00-2.6 0A1.78 1.78 0 015 18v-7M10 10h.01M14 10h.01M10 14a3.5 3.5 0 004 0" />
      </svg>
        <h3>Don't We Folks</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus necessitatibus repellendus blanditiis hic ipsum excepturi fugit nobis.</p>
      </Card>
    </FeaturesInner>
  </Features>
)

export default Cards
