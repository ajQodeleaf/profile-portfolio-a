import Image from "next/image";
import React from "react";
import { profileData } from "../../lib/constants";

const Profile = () => {
    return (
        <div className="relative h-[640px] w-full px-36 pt-24 pb-2 bg-cover bg-center" style={{ backgroundImage: `url(${profileData.backgroundImage})` }}>
            <div className="absolute inset-0 bg-[rgb(24,33,83)] opacity-90"></div>

            <div className="relative w-full h-full flex">
                <div className="relative w-1/2 h-full">
                    <Image
                        src={profileData.profileImage}
                        alt={profileData.name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="w-1/2 h-full pl-20 pt-12" style={{ backgroundColor: "#f1f1f1", color: "#182153" }}>
                    <div>
                        <h1 className="font-avenirLight" style={{ fontSize: "30px", lineHeight: "1.4em" }}>{profileData.name}</h1>
                        <p className="font-avenirHeavy" style={{ fontSize: "14px", lineHeight: "1.2em", letterSpacing: "0.05em" }}>{profileData.title}</p>
                    </div>
                    <div className="pt-8">
                        <h1 className="font-avenirHeavy" style={{ fontSize: "14px", lineHeight: "1.4em", letterSpacing: "0.05em" }}>Phone:</h1>
                        <p className="font-avenirLight" style={{ fontSize: "14px", lineHeight: "1.4em" }}>{profileData.phone}</p>
                    </div>
                    <div className="pt-8">
                        <h1 className="font-avenirHeavy" style={{ fontSize: "14px", lineHeight: "1.4em", letterSpacing: "0.05em" }}>Email:</h1>
                        <p className="font-avenirLight" style={{ fontSize: "14px", lineHeight: "1.4em" }}>{profileData.email}</p>
                    </div>
                    <div className="pt-8">
                        <h1 className="font-avenirHeavy" style={{ fontSize: "14px", lineHeight: "1.4em", letterSpacing: "0.05em" }}>Address:</h1>
                        <p className="font-avenirLight" style={{ fontSize: "14px", lineHeight: "1.4em" }}>{profileData.address}</p>
                    </div>
                    <div className="pt-8">
                        <h1 className="font-avenirHeavy" style={{ fontSize: "14px", lineHeight: "1.4em", letterSpacing: "0.05em" }}>Date of Birth:</h1>
                        <p className="font-avenirLight" style={{ fontSize: "14px", lineHeight: "1.4em" }}>{profileData.dob}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
