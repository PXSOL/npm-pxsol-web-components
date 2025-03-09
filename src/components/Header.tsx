import Link from "next/link";
import { FunctionComponent } from "react";

export const Header:FunctionComponent = ()=>{

    return(
        <>

        <div className="spacing-top-header">
        </div>
        <header className="header-nav-colection" data-header>
            <div className="overlay" data-overlay></div>

            <div className="container">
                <a href="#" className="logo">
                    <svg className="logo-responsive" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="258.000000pt" height="255.000000pt" viewBox="0 0 258.000000 255.000000"
                    preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,255.000000) scale(0.100000,-0.100000)"
                        fill="#3256be" stroke="none">
                            <path d="M1250 2521 c-19 -4 -44 -12 -55 -19 -11 -6 -273 -264 -582 -574 -550
                            -552 -561 -564 -571 -613 -18 -84 6 -149 70 -198 65 -49 144 -54 215 -14 12 6
                            193 182 401 390 438 434 434 432 582 432 70 0 94 -5 140 -26 191 -90 259 -326
                            142 -499 -53 -79 -125 -124 -239 -150 -111 -26 -155 -55 -214 -142 -95 -139
                            -138 -295 -146 -518 -4 -131 -2 -169 15 -245 36 -161 96 -261 186 -308 50 -26
                            127 -27 176 -4 21 10 275 258 597 580 547 548 561 563 573 613 25 109 52 76
                            -573 702 -309 310 -573 569 -587 576 -34 18 -88 25 -130 17z"/>
                        </g>
                    </svg>

                    <svg className="logo-width" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="883.000000pt" height="254.000000pt" viewBox="0 0 883.000000 254.000000"
                    preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,254.000000) scale(0.100000,-0.100000)"
                        fill="#3256be" stroke="none">
                            <path d="M1250 2521 c-19 -4 -44 -12 -55 -19 -11 -6 -273 -264 -582 -574 -550
                            -552 -561 -564 -571 -613 -18 -84 6 -149 70 -198 65 -49 144 -54 215 -14 12 6
                            193 182 401 390 438 434 434 432 582 432 70 0 94 -5 140 -26 191 -90 259 -326
                            142 -499 -53 -79 -125 -124 -239 -150 -111 -26 -155 -55 -214 -142 -95 -139
                            -138 -295 -146 -518 -4 -131 -2 -169 15 -245 36 -161 96 -261 186 -308 50 -26
                            127 -27 176 -4 21 10 275 258 597 580 547 548 561 563 573 613 25 109 52 76
                            -573 702 -309 310 -573 569 -587 576 -34 18 -88 25 -130 17z"/>
                            <path d="M4385 1886 c-53 -24 -70 -52 -70 -117 0 -52 3 -62 31 -90 59 -58 164
                            -48 199 21 22 43 19 112 -6 144 -41 52 -97 67 -154 42z"/>
                            <path d="M3970 1315 l0 -566 98 3 97 3 3 563 2 562 -100 0 -100 0 0 -565z"/>
                            <path d="M3210 1300 l0 -550 298 2 297 3 3 103 3 102 -201 0 -201 0 3 143 3
                            142 198 3 197 2 0 100 0 100 -200 0 -201 0 3 98 3 97 198 3 197 2 0 100 0 100
                            -300 0 -300 0 0 -550z"/>
                            <path d="M5125 1580 c-66 -10 -99 -24 -157 -66 l-48 -34 0 40 0 40 -100 0
                            -100 0 0 -550 0 -550 100 0 100 0 0 185 c0 102 3 185 6 185 3 0 22 -13 42 -29
                            180 -139 443 -55 549 175 48 104 44 294 -9 398 -29 56 -115 144 -169 171 -40
                            21 -66 28 -144 39 -11 2 -42 0 -70 -4z m101 -204 c85 -40 124 -109 124 -223 0
                            -146 -96 -240 -236 -231 -76 5 -133 40 -172 107 -24 40 -27 57 -27 131 0 92
                            11 123 62 174 66 67 161 83 249 42z"/>
                            <path d="M6145 1580 c-64 -10 -88 -20 -152 -63 l-53 -36 0 40 0 39 -100 0
                            -100 0 0 -550 0 -550 100 0 100 0 0 185 c0 102 3 185 6 185 3 0 22 -13 42 -29
                            180 -139 443 -55 549 175 48 104 44 294 -9 398 -29 56 -115 144 -169 171 -40
                            21 -66 28 -144 39 -11 2 -42 0 -70 -4z m75 -190 c90 -25 152 -118 152 -230 0
                            -150 -97 -247 -238 -238 -77 5 -132 38 -171 105 -25 43 -28 58 -28 133 0 92
                            11 123 62 174 57 58 141 79 223 56z"/>
                            <path d="M6922 1578 c-64 -10 -98 -26 -141 -70 -45 -45 -64 -92 -64 -159 -1
                            -103 54 -168 215 -254 98 -53 111 -63 127 -94 11 -20 10 -27 -6 -49 -40 -54
                            -117 -48 -199 14 l-46 36 -40 -39 c-22 -21 -49 -51 -61 -67 l-21 -29 50 -46
                            c64 -58 134 -84 229 -84 173 0 287 97 288 248 1 119 -55 187 -231 274 -81 41
                            -122 71 -122 91 0 6 9 19 20 30 32 32 88 26 148 -14 l50 -33 62 62 61 62 -40
                            36 c-80 73 -172 101 -279 85z"/>
                            <path d="M7731 1579 c-85 -11 -165 -51 -229 -116 -62 -64 -87 -110 -108 -200
                            -59 -252 92 -484 340 -523 160 -25 342 36 415 139 l22 31 -82 40 -82 39 -28
                            -19 c-148 -106 -340 -63 -393 88 l-15 42 329 0 330 0 0 44 c0 117 -48 242
                            -123 319 -53 54 -148 103 -216 112 -25 3 -57 7 -71 9 -14 1 -54 -1 -89 -5z
                            m140 -173 c50 -9 114 -58 139 -106 l20 -40 -220 0 c-143 0 -220 4 -220 10 0
                            25 54 88 93 110 41 24 107 40 137 35 8 -2 31 -6 51 -9z"/>
                            <path d="M8614 1562 c-17 -11 -45 -37 -62 -58 l-32 -39 0 48 0 47 -85 0 -85 0
                            0 -405 0 -405 100 0 100 0 0 239 c0 313 12 370 83 411 21 12 32 12 56 3 l30
                            -11 31 85 c17 47 28 88 25 91 -3 4 -34 8 -68 10 -48 2 -69 -1 -93 -16z"/>
                            <path d="M4340 1155 l0 -406 98 3 97 3 3 403 2 402 -100 0 -100 0 0 -405z"/>
                        </g>
                    </svg>


                </a>
                <button className="nav-open-btn" data-nav-open-btn>
                    lll
                </button>
                <nav className="navbar" data-navbar>

                    <button className="nav-close-btn" data-nav-close-btn>
                        x               
                    </button>

                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link href="#home" className="navbar-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="#service" className="navbar-link">Service</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="#about" className="navbar-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="#features" className="navbar-link">Features</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="#pricing" className="navbar-link">Pricing</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="#faq" className="navbar-link">FAQ's</Link>
                        </li>
                    </ul>

                    <button className="btn btn-primary">Comenzar Ahora</button>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header;