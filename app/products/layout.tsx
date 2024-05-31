import NavButtons from "@/components/NavButtons"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return( 
  <section className="flex-1 flex flex-col">
    <div className="flex-1 flex flex-col">
    {children}

    </div>
    <NavButtons/>
  </section>
)
}