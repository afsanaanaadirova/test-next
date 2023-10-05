export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
       Route Group ile yazilan  folderin layoutuyam, gosterilen route bashqa route var ancaq [] yazidigim uchun gorsenmir
        {children}
      </section>
    )
  }