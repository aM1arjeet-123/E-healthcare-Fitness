import ChangeProfilePicture from "./SettingSubPart/changeProfilePicture"
import DeleteAccount from "./SettingSubPart/DeleteAccount"
import EditProfile from "./SettingSubPart/EditProfile"
import UpdatePassword from "./SettingSubPart/UpdatePassword"

export default function Settings() {
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
     <ChangeProfilePicture />
      {/* Profile */}
     <EditProfile />
      {/* Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}
