import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/Announcements">
        <a style={linkStyle}>Announcements</a>
      </Link>
      <Link href="/Check Ins">
        <a style={linkStyle}>Check Ins</a>
      </Link>
      <Link href="/Applications">
        <a style={linkStyle}>Applications</a>
      </Link>
    </div>
  )
}
