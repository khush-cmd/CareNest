import { useEffect } from "react";
import { useState } from "react";

 const MyProfile = () => {
    const [profile,setProfile] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async() => {
            const response = await fetch('http://localhost:3001/api/profile',{
        
                    method : "GET",
                    credentials: "include"
                    // yeh login success hone ke sath cookie bhejta hai

                }
            );
            const data = await response.json();
            console.log(data);
            setProfile(data.user);
            setLoading(false);
            
        }
        fetchProfile();
    },[]);
    if(loading){
        return<p>Loading Profile...</p>
    }
return (
  <div className="min-h-screen bg-green-50 px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your personal information
        </p>
      </div>

      {/* Profile Card */}
      <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">

        {/* Card Header */}
        <div className="flex items-center gap-4 border-b border-gray-100 bg-green-100/60 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
            {profile.user.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {profile.user}
            </h2>
            <p className="text-sm text-gray-500">
              Patient
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="p-6 sm:p-8">
          <h3 className="mb-6 text-lg font-semibold text-gray-800">
            Personal Information
          </h3>

          <div className="space-y-5">

            <div>
              <p className="mb-1 text-sm font-medium text-gray-500">
                Full Name
              </p>
              <p className="rounded-lg bg-gray-50 px-4 py-3 text-gray-800">
                {profile.user}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-medium text-gray-500">
                Email Address
              </p>
              <p className="rounded-lg bg-gray-50 px-4 py-3 text-gray-800">
                {profile.email}
              </p>
            </div>
            <div className="mt-8 flex justify-end">
  <button
    className="rounded-lg bg-green-600 px-6 py-3
               font-medium text-white
               transition hover:bg-green-700"
  >
    Edit Profile
  </button>
</div>

          </div>
        </div>
      </div>

    </div>
  </div>
);
}
export default MyProfile;