import Link from 'next/link'
import React from 'react'
// imlek:

function TopBar() {
    return (
        <div className="text-center py-2 desktop-only d-block" style={{ background: "#ffde7c", display: "none" }}>
            <span>Pelajari kebijakan selama masa pandemi covid. <Link href="/covid19">
                <a> Pelajari lebih lanjut</a>
            </Link>
            </span>
        </div>
    )
}

export default TopBar
