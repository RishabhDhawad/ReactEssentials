import React from 'react'
import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data'

function CoreConcepts() {
  return (
    <section id="core-concepts">
    <h2>Core Concept</h2>
    <ul>
      {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
    </ul>
  </section>
  )
}

export default CoreConcepts