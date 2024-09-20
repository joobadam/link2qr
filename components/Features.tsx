import { PaddingIcon, TransformIcon, LockClosedIcon } from "@radix-ui/react-icons"
import { BarChartIcon, ZapIcon } from "lucide-react"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import Image from "next/image"
import Notifications from "./Notifications"



const features = [
  {
    Icon: PaddingIcon,
    name: "Generate QR Codes",
    description: "Create custom QR codes for various purposes in seconds.",
    href: "#",
    cta: "Start generating",
    className: "col-span-3 lg:col-span-2 text-white",
    background: (
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <Image src="/assets/img/pic2.jpg" alt="Testreszabás" width={1000} height={1000} className="fimg " />
    </div>
    ),
  },
  {
    Icon: TransformIcon,
    name: "Customization",
    description: "Personalize your QR codes with colors, logos, and designs.",
    href: "#",
    cta: "Explore options",
    className: "col-span-3 lg:col-span-1 text-white",
    background: (
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <Image src="/assets/img/pic4.jpg" alt="Testreszabás" width={1000} height={1000} className="fimg" />
      </div>
    ),
  },
  {
    Icon: BarChartIcon,
    name: "",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 lg:col-span-1 text-white",
    background: (
        <div>
      <div className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 bg-black/50" >
      </div>
       <Image src="/assets/img/pic3.jpg" alt="Testreszabás" width={1000} height={1000} className="fimg absolute z-20" />
       <div className="absolute">
        <Notifications />
       </div>
       </div>
    ),
  },
  {
    Icon: ZapIcon,
    name: "Dynamic QR Codes",
    description: "Create QR codes that can be updated without reprinting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 text-white",
    background: (
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <Image src="/assets/img/pic1.jpg" alt="Dynamic QR Codes" width={1000} height={1000} className="fimg" />
      </div>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section className="flex-center container1 bg-gray-100 dark:bg-neutral-300" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful <span className="text-yellow-500">QR</span> Code Features</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the full potential of our <span className="text-yellow-500">QR</span> code generator with these advanced features designed to elevate your business.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-8 ">
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature}/>
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;