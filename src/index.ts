// @thanks to: https://wohugb.gitbooks.io/javascript/content/htmlapi/fullscreen.html

class Fullscreen {
  static isFullscreen = false;
  static get isEnabled() {
    const doc = document as any;
    return (
      doc.fullscreenEnabled ||
      doc.mozFullScreenEnabled ||
      doc.webkitFullscreenEnabled ||
      doc.msFullscreenEnabled
    );
  }

  static request(inElement?: HTMLElement) {
    const { isFullscreen } = Fullscreen;
    if (isFullscreen) return Promise.resolve();
    const element = inElement || (document.documentElement as any);
    if (element.requestFullscreen) {
      return element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      return element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      return element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      return element.webkitRequestFullScreen();
    }
    return Promise.resolve();
  }

  static exit() {
    const { isFullscreen } = Fullscreen;
    if (!isFullscreen) return Promise.resolve();
    const doc = document as any;
    if (doc.exitFullscreen) {
      return doc.exitFullscreen();
    } else if (doc.msExitFullscreen) {
      return doc.msExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      return doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      return doc.webkitExitFullscreen();
    }
    return Promise.resolve();
  }

  static toggle(inElement?: HTMLElement) {
    const { isFullscreen } = Fullscreen;
    if (isFullscreen) {
      return this.exit();
    } else {
      return this.request(inElement);
    }
  }

  static to(inValue: boolean, inElement?: HTMLElement) {
    if (inValue) {
      return this.request(inElement);
    } else {
      return this.exit();
    }
  }

  static on(inHandler: (e: any) => any) {
    document.addEventListener('fullscreenchange', inHandler);
    return {
      destroy: () => {
        document.removeEventListener('fullscreenchange', inHandler);
      },
    };
  }
}

document.addEventListener('fullscreenchange', function () {
  Fullscreen.isFullscreen = !!document.fullscreenElement;
});

export default Fullscreen;
