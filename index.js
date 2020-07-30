import SvgFill  from 'svg-fill';

const makeUrlObject = (data) => {
  // makes url object from the data passed
  let blob = new Blob([data], { type: "image/svg+xml" });
  return URL.createObjectURL(blob);
};

const getSvg = async (url) => {
  // get the content of svg
  try {
    const svg = await fetch(url);
    return await svg.text();
  } catch (error) {
    throw new Error("Error fetching url");
  }
};

const colorizeSvg = (inlineSvg, color) => {
  //colorize svg
  const svgFill = new SvgFill(color);
  return svgFill.fillSvg(inlineSvg);
};

export  const colorizeSVG = async (url, color, type = "URL") => {
  try {
    switch (type) {
      case "URL":
        const inlineSvg = await getSvg(url);
        const coloredSvg = colorizeSvg(inlineSvg, color);
        let res = makeUrlObject(coloredSvg);
        return res;

      case "INLINE":
        return makeUrlObject(colorizeSvg(url, color));
    }
  } catch (error) {
    console.log(error.message);
    return url;
  }
};


// Thanks to svg-fill package for giving cool way to fill the svg with specified color
// https://www.npmjs.com/package/svg-fill
