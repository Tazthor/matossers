
import React from "react";
import XXSSStyles from '../styles/xxss.module.css'
import { Box } from "@chakra-ui/react";

export const XXSS = function (props) {

    return (
        <div className="social">
            {(props.fb) &&
                <Box display="inline" mr="3px"><a className={XXSSStyles.XXSSfb} href={(props.fburl)? props.fburl : "https://www.facebook.com/Matossers/"} target="_blank" rel="noreferrer"></a></Box>
            }
            {(props.tw) &&
                <Box display="inline" mr="3px"><a className={XXSSStyles.XXSStw} href={(props.twurl)? props.twurl : "https://twitter.com/matossers"} target="_blank" rel="noreferrer"></a></Box>
            }
            {(props.ig) &&
                <Box display="inline" mr="0"><a className={XXSSStyles.XXSSinsta} href={(props.instaurl)? props.instaurl :"https://www.instagram.com/matossers/"} target="_blank" rel="noreferrer"></a></Box>
            }
            {(props.yt) &&
                <Box display="inline"> <a className={XXSSStyles.XXSSyt} href={(props.yturl)? props.yturl :"https://www.youtube.com/user/MatossersMolins"} target="_blank" rel="noreferrer"></a></Box>
            }
        </div>

    )
}