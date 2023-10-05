export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    return (
      <section>
       dynamic routing slug deyishende gosterirem, route deyishib baxin, ancaq birdene segmente icaze var
        {children}
      </section>
    )
  }