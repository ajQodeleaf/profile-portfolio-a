import React from 'react'
import { profileData } from '../../lib/constants'

const Footer = () => {
    return (
        <footer className="bg-white py-4 text-start text-white">
            <div className="max-w-screen-xl mx-auto px-32">
                <p style={{ color: '#2f2e2e', fontSize: '12px', lineHeight: '1.4em' }}>
                    © 2025 By {profileData.name}.
                </p>
            </div>
        </footer>
    )
}

export default Footer
