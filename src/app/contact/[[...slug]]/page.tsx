import React from "react"

export default function Page({ params }: { params: { slug: string } }) {
    return <div>Men optional catch all oldugum uchun segmentim olmasa bele error vermirem: {params.slug}</div>
  }