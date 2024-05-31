import NavButtons from "@/components/NavButtons"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return( 
  <section>
    {children}
    <NavButtons/>
  </section>
)
}