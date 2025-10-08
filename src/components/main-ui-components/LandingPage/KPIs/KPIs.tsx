import React from 'react'

export default function KPIs() {
  return (
     <div className=" md:mx-6 min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) mx-auto w-full xl:px-0">
        <h2 className="main-heading ">
          Unlocking Borderless Opportunities
        </h2>
        <p className="mt-4  paragraph">
          Effortless connectivity and worldwide reach for modern enterprises.
        </p>
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-16 justify-center ">
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold">
              20+
            </span>
            <p className="mt-6 font-medium text-xl">
              Countries
            </p>
            {/* <p className="mt-2 text-muted-foreground">
              Super smart global color, typography and effects styles +
              variables!
            </p> */}
          </div>
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold text-muted-foreground">
              350+
            </span>
            <p className="mt-6 font-medium text-xl">Enterprises</p>
            {/* <p className="mt-2 text-muted-foreground">
              We&apos;ve thought of everything you need so you don&apos;t have
              to.
            </p> */}
          </div>
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold">
              15+
            </span>
            <p className="mt-6 font-medium text-xl">Digital Assets</p>
            {/* <p className="mt-2 text-muted-foreground">
              A whopping 420+ ready-to-go desktop and mobile page examples.
            </p> */}
          </div>
          <div>
            <span className="text-5xl md:text-6xl tracking-tight font-semibold text-muted-foreground">
              10+
            </span>
            <p className="mt-6 font-medium text-xl">Domains</p>
            {/* <p className="mt-2 text-muted-foreground">
              All the icons you&apos;ll need, including country flags and
              payments.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
