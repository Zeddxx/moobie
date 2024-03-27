"use client";

import artplayerPluginHlsQuality from "artplayer-plugin-hls-quality";
import Hls from "hls.js";
import ArtPlayer from "artplayer";
import Player from "./player";
import Option from "artplayer/types/option";

type VideoPlayerProps = {
  episodeUrl: string;
  poster: string;
};

const MoobiePlayer = ({ episodeUrl, poster }: VideoPlayerProps) => {

  function playM3u8(video: any, url: string, art: ArtPlayer) {
    if (Hls.isSupported()) {
      if (art.hls) art.hls.destroy();
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      art.hls = hls;
      art.on("destroy", () => hls.destroy());
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    } else {
      art.notice.show = "Unsupported playback format: m3u8";
    }
  }

  let options: Option = {
    container: ".artplayer-app",
    url: episodeUrl,
    customType: {
      m3u8: playM3u8,
    },
    poster: poster || "",
    volume: 1,
    isLive: false,
    muted: false,
    autoplay: false,
    autoOrientation: true,
    pip: true,
    autoSize: false,
    fastForward: true,
    autoMini: false,
    screenshot: true,
    setting: true,
    plugins: [
      artplayerPluginHlsQuality({
        control: true,
        getResolution: (level) => level.height + "p",
        title: "Quality",
        auto: "Auto",
      }),
    ],
    loop: false,
    flip: true,
    lock: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: false,
    subtitleOffset: false,
    miniProgressBar: false,
    mutex: true,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,
    theme: "#F9CF2B",
    moreVideoAttr: {
      crossOrigin: "anonymous",
    },
  };

  return (
    <Player
      option={options}
      className="art-container xl:order-none order-first flex-shrink-0 aspect-video xl:max-w-4xl w-full"
    />
  );
};
export default MoobiePlayer;
