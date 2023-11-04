import React from "react"
import { LaunchItemFragment } from "./LaunchItem.generated"

import "./LaunchItem.scss"
import logo from "../../assets/logo.svg"

interface Props {
    launch: LaunchItemFragment
}

const LaunchItem: React.FC<Props> = ({ launch }) => {

    const { mission_name, launch_date_utc, links } = launch
    return (
        <div className="launch">
            <figure className="launch__figure">
                <div className="launch__figure-frame">
                    <img
                        //src={links?.mission_patch_small || logo}
                        src={links?.mission_patch_small || logo}
                        alt="mission_logo"
                        className="launch__figure-img"
                    />
                </div>
            </figure>

            <div className="launch__content">
                <h3 className="launch__title">{mission_name}</h3>

                <div className="launch__caption">
                    {new Date(launch_date_utc).toUTCString()}
                </div>
            </div>
        </div>
    )
}

export default LaunchItem