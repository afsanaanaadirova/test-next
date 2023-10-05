interface Files{
 children: React.ReactNode
 analytics: React.ReactNode
 team: React.ReactNode
}

export default function Layout(props:Files) {
    return (
      <>
        {props.children}
        {props.team}
        {props.analytics}
      </>
    )
  }