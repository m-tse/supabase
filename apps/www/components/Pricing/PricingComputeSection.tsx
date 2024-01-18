import React, { useState } from 'react'
import Panel from '../Panel'
import { Button, cn } from 'ui'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/outline'
import ComputePricingTable from './ComputePricingTable'

const PricingComputeSection = () => {
  const { resolvedTheme } = useTheme()
  const [showTable, setShowTable] = useState(false)

  return (
    <Panel outerClassName="w-full mx-auto max-w-6xl" innerClassName="flex flex-col gap-4">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-8 gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center h-12 w-12 bg-alternative rounded-lg mb-3">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7075 8.99963H6.4232V14.9996M20 16.7328V20C20 20.5523 19.5523 21 19 21H6C5.44772 21 5 20.5523 5 20V16C5 15.4477 5.44772 15 6 15H13.5937M12.8637 9H6C5.44772 9 5 8.55229 5 8V4C5 3.44772 5.44772 3 6 3H19C19.5523 3 20 3.44772 20 4V7.99585M14.0817 17.2045V11.1907H10.7459L16.9259 4.92151L20.0159 8.05613L23.1059 11.1907H20.0033V18M16.9077 11.9619V18.7052"
                    stroke="hsl(var(--brand-default))"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-brand text-sm">Optimized compute</p>
              <h3 className="text-foreground text-2xl">
                Scale each project
                <br className="hidden md:block" /> up to 256 GB compute
              </h3>
            </div>
            <p className="text-foreground-lighter text-[13px]">
              Paid plans include one Starter instance for free, additional compute add-ons are
              available if you need extra performance when scaling up Supabase.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Button asChild size="tiny" type="default">
              <Link href="https://supabase.com/docs/guides/platform/compute-add-ons">
                Learn about compute
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            fill
            src={`/images/pricing/compute-${
              resolvedTheme?.includes('dark') ? 'dark' : 'light'
            }.svg`}
            alt="Compute addon illustration"
            className="object-contain object-center p-8"
          />
        </div>
      </div>
      <hr className="mx-4 border-0 border-t" />
      <div className="flex flex-col">
        <ComputePricingTable />

        <button
          onClick={() => setShowTable(!showTable)}
          className="w-full p-2 text-foreground text-sm bg-alternative flex items-center justify-center gap-2"
        >
          <ChevronDownIcon
            className={cn(
              'w-4 transition-transform transform origin-center',
              showTable ? 'rotate-180' : 'rotate-0'
            )}
          />{' '}
          {!showTable ? 'Expand' : 'Hide'} Pricing breakdown
        </button>
      </div>
    </Panel>
  )
}

export default PricingComputeSection
