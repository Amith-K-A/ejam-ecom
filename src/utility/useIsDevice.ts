import { useState, useEffect } from "react";
import { deviceType } from "./enum/device-list";

/**
 * Takes device types(single are multiple) as input, returns boolean if screen size is matching
 *
 */
const useIsDevice = (...type: any[]) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let device = false;
  for (const value of Object.values(type)) {
    if (device) {
      break;
    }
    switch (value) {
      case deviceType.MOBILE: {
        if (
          windowWidth < deviceType.MOBILELARGE &&
          windowWidth >= deviceType.MOBILE
        ) {
          device = true;
        } else {
          device = false;
        }
        continue;
      }
      case deviceType.MOBILELARGE: {
        if (
          windowWidth < deviceType.TABLET &&
          windowWidth >= deviceType.MOBILELARGE
        ) {
          device = true;
        } else {
          device = false;
        }
        continue;
      }
      case deviceType.TABLET: {
        if (
          windowWidth < deviceType.LAPTOP &&
          windowWidth >= deviceType.TABLET
        ) {
          device = true;
        } else {
          device = false;
        }
        continue;
      }
      case deviceType.LAPTOP: {
        if (
          windowWidth < deviceType.DESKTOP &&
          windowWidth >= deviceType.LAPTOP
        ) {
          device = true;
        } else {
          device = false;
        }
        continue;
      }
      case deviceType.DESKTOP: {
        if (windowWidth >= deviceType.DESKTOP) {
          device = true;
        } else {
          device = false;
        }
        continue;
      }
      default: {
        device = false;
      }
    }
  }
  return device;
};

export default useIsDevice;
