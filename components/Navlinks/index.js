import Link from "next/link"

import { Button } from ".."


export default function index(props) {
  const linkStyles = `flex flex-row items-center text-lg font-Outfit
    text-text-color leading-[23.4px] cursor-pointer`

  return (
    <section className={`${props.onDesktopNavWrapper || props.mobileNavWrapper} bg-body-background`}>
        <ul className={props.onDesktopUlWrapper || props.mobileUlWrapper}>
            <li className={linkStyles}>
                <Link href="/">
                    <span>Home</span>
                </Link>
            </li>
            <li className={linkStyles}>
                <Link href="/services">
                    <span>Services</span>
                </Link>
            </li>
            <li className={linkStyles}>
                <Link href="/locations">
                    <span>Locations</span>
                </Link>
            </li>
            <li className={linkStyles}>
                <Link href="about">
                    <span>About</span>
                </Link>
            </li>
            <li className={linkStyles}>
                <span>Pages</span>
            </li>
        </ul>
        <Button
            className={`cursor-pointer font-Outfit rounded text-base
            text-text-color-2 leading-4 p-4 ${props.buttonStyle}`}
        >
            Get a Quote
        </Button>
  </section>
  )
}
