import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router-dom";

const Video_Room = () => {

    const { id } = useParams();

    const meeting = (element) => {

        const appID = 1745225403;
        const serverSecret = "b6871c0ae9a409d6c521b76298a51031";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            Date.now().toString(),
            "rahul"
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                  name: 'Personal link',
                  url: `http://localhost:5174/room/${id}`
                },
              ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        })

    }


    return (
        <>
            <div ref={meeting} />
        </>

    )
}

export default Video_Room