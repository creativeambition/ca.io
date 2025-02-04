"use client";
import { useEffect } from "react";
function PatternBackground() {
  const fillPath = (paths: NodeListOf<SVGPathElement>) => {
    const selectedIndices = new Set<number>();

    while (selectedIndices.size < 5) {
      let pathIndex = Math.floor(Math.random() * paths.length);
      selectedIndices.add(pathIndex);
    }

    selectedIndices.forEach((pathIndex) => {
      const path = paths[pathIndex];
      path.classList.add("animate-animateSVG");

      const handleAnimationEnd = () => {
        path.classList.remove("animate-animateSVG");
        path.removeEventListener("animationend", handleAnimationEnd);
      };

      path.addEventListener("animationend", handleAnimationEnd);
    });
  };

  useEffect(() => {
    let paths: NodeListOf<SVGPathElement> =
      document.querySelectorAll("#pattern-bg path");

    let animationFrameId: number;
    const animatePaths = () => {
      fillPath(paths);
      animationFrameId = requestAnimationFrame(() =>
        setTimeout(animatePaths, 6000)
      );
    };
    animatePaths();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/vector_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <svg
        id="pattern-bg"
        height="100%"
        width="100%"
        viewBox="0 0 4010 2045"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray={1100}
        strokeDashoffset={1100}
      >
        <path
          d="M501 623.5L501 498L591 625.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1167 623.5L1167 498L1257 625.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2518 623.5L2518 498L2608 625.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3869 622.5L3869 497L3959 624.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1852 623.5L1852 498L1942 625.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3204 623.5L3204 498L3294 625.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M893 451L893 621"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1579 454L1579 624"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2932 454L2932 624"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2245 454L2245 624"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3597 454L3597 624"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M227 456L227 626"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M929 138.5V73H705L780.5 150V215.5L879.5 313"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1043 143V291L1130 202.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M392 451L392 506"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1058 451L1058 506"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1743 451L1743 506"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2409 451L2409 506"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3095 451L3095 506"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3761 451L3761 506"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M327 389L327 665L455 533.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M993 389L993 665L1121 533.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1678 389L1678 665L1806 533.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2344 389L2344 665L2472 533.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3031 390L3031 666L3159 534.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3696 389L3696 665L3824 533.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2395 143V291L2482 202.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3747 144V292L3834 203.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2279 138.5V73H2055L2130.5 150V215.5L2229.5 313"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3631 138.5V73H3407L3482.5 150V215.5L3581.5 313"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1614 138.5V73H1390L1465.5 150V215.5L1564.5 313"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M262 136.5V71H38L113.5 148V213.5L212.5 311"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2966 137.5V72H2742L2817.5 149V214.5L2916.5 312"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M993 37L993 313L865 181.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2345 37L2345 313L2217 181.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3698 38L3698 314L3570 182.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1678 37L1678 313L1550 181.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M327 37L327 313L199 181.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3031 36L3031 312L2903 180.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M378 143V291L464 202.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1730 143V291L1816 202.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3082 143V291L3168 202.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M636 6H363L493.959 140"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1989 4H1716L1846.96 138"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3340 5H3067L3197.96 139"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1302 6H1029L1159.96 140"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2654 4H2381L2511.96 138"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4006 7H3733L3863.96 141"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M504 73H575"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1857 71H1928"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3207 72H3278"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2521 71H2592"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3874 71H3945"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1171 73H1242"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1364 143V312.5H1479"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M12 143V312.5H127"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2716 142V311.5H2831"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M439.5 312H519V192.5L575.5 135H678.5V225.5L786.5 318L612.5 313.5V195.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1792 313H1871.5V193.5L1928 136H2031V226.5L2139 319L1965 314.5V196.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3143 312H3222.5V192.5L3279 135H3382V225.5L3490 318L3316 313.5V195.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1090 319H1180.5V256.684L1225.5 210V122H1302V319H1245"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2441 318H2531.5V255.684L2576.5 209V121H2653V318H2596"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3794 320H3884.5V257.684L3929.5 211V123H4006V320H3949"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M381 388.5H502.5L548 436L604 376.5H654V448.5L612 495L677 561.5L746 491.5V376.5H911.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1733 388H1854.5L1900 435.5L1956 376H2006V448L1964 494.5L2029 561L2098 491V376H2263.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3084 388H3204.5L3251 436.5L3307 377H3357V449L3315 495.5L3380 562L3449 492V377H3614.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M243.5 387.5H120.5L78 517L12 448.5V625"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1594.5 388H1471.5L1429 517.5L1363 449V625.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2947.5 388H2824.5L2782 517.5L2716 449V625.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1058 388H1204.5V450.5H1257V388H1303V625"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2410 388H2556.5V450.5H2609V388H2655V625"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3761 387H3907.5V449.5H3960V387H4006V624"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1367 384H1421.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2720 384H2774.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M15 384H69.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3744.5 827V975L3831.5 886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4005.5 690H3729.5L3861.9 824"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3872.5 756H3943.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 1118L3758.5 1173"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3694.5 1055L3694.5 1331L3822.5 1199.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3867.5 1288.5L3867.5 1163L3957.5 1290.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4004 736.5V824H3913V952L3838 1030H4004V901"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3884 1094.5H4003.5V1291"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3629 822V756.5H3405L3480.5 833.5V899L3579.5 996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3094 1046.5H3158L3203.5 1000V938.5H3266.5V823.5H3378L3423.5 869.5V934L3492 1004L3372.5 1113.5L3431.5 1187.5L3508 1109.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3079.5 827V975L3165.5 886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3338.5 690H3065.5L3196.46 824"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3664 689.5H3394.5L3522.5 558"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3205.5 756H3276.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3093.5 1117L3093.5 1172"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3027.5 1055L3027.5 1331L3155.5 1199.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3694.5 721L3694.5 997L3566.5 865.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3201.5 1287L3201.5 1161.5L3291.5 1289"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3594.5 1117L3594.5 1287"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3337.5 880L3337.5 1026L3377.5 985"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3242.5 1076L3357.5 1239"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2963.5 822V756.5H2739.5L2815 833.5V899L2914 996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2392.5 827V975L2479.5 886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2653.5 690H2377.5L2509.9 824"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2999.5 691H2730.5L2858.26 558"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2520.5 756H2591.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2406.5 1118L2406.5 1173"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 1055L2342.5 1331L2470.5 1199.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3027.5 721L3027.5 997L2899.5 865.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2515.5 1288.5L2515.5 1163L2605.5 1290.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2928.5 1117L2928.5 1287"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2652 736.5V824H2561V952L2486 1030H2652V901"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2713.5 808.5V877.5H2770.5L2712.5 935.5V1016.5H2829.5L2886 1073.5H2799.5L2712.5 1131V1191L2799.5 1145V1191L2710 1283"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2532 1094.5H2651.5V1291"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2277 822V756.5H2053L2128.5 833.5V899L2227.5 996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1742 1046.5H1806L1851.5 1000V938.5H1914.5V823.5H2026L2071.5 869.5V934L2140 1004L2020.5 1113.5L2079.5 1187.5L2156 1109.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1727.5 827V975L1813.5 886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1986.5 690H1713.5L1844.46 824"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2312 689.5H2042.5L2170.5 558"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1853.5 756H1924.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1741.5 1117L1741.5 1172"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 1055L1675.5 1331L1803.5 1199.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 721L2342.5 997L2214.5 865.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1849.5 1287L1849.5 1161.5L1939.5 1289"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2242.5 1117L2242.5 1287"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1985.5 880L1985.5 1026L2025.5 985"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1890.5 1076L2005.5 1239"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1611.5 822V756.5H1387.5L1463 833.5V899L1562 996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1040.5 827V975L1127.5 886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1301.5 690H1025.5L1157.9 824"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1647.5 691H1378.5L1506.26 558"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1168.5 756H1239.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1054.5 1118L1054.5 1173"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 1055L990.5 1331L1118.5 1199.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 721L1675.5 997L1547.5 865.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1163.5 1288.5L1163.5 1163L1253.5 1290.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1576.5 1117L1576.5 1287"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1300 736.5V824H1209V952L1134 1030H1300V901"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1361.5 808.5V877.5H1418.5L1360.5 935.5V1016.5H1477.5L1534 1073.5H1447.5L1360.5 1131V1191L1447.5 1145V1191L1358 1283"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1180 1094.5H1299.5V1291"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M925 822V756.5H701L776.5 833.5V899L875.5 996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M390 1046.5H454L499.5 1000V938.5H562.5V823.5H674L719.5 869.5V934L788 1004L668.5 1113.5L727.5 1187.5L804 1109.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M375.5 827V975L461.5 886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M634.5 690H361.5L492.459 824"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M960 689.5H690.5L818.5 558"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501.5 756H572.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M389.5 1117L389.5 1172"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M323.5 1055L323.5 1331L451.5 1199.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 721L990.5 997L862.5 865.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M497.5 1287L497.5 1161.5L587.5 1289"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M498.5 1976.5L498.5 1851L588.5 1978.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1164.5 1976.5L1164.5 1851L1254.5 1978.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2515.5 1976.5L2515.5 1851L2605.5 1978.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3866.5 1975.5L3866.5 1850L3956.5 1977.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1849.5 1976.5L1849.5 1851L1939.5 1978.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3201.5 1976.5L3201.5 1851L3291.5 1978.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M890.5 1117L890.5 1287"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M890.5 1804L890.5 1974"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1576.5 1807L1576.5 1977"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2929.5 1807L2929.5 1977"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2242.5 1807L2242.5 1977"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3594.5 1807L3594.5 1977"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M633.5 880L633.5 1026L673.5 985"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M538.5 1076L653.5 1239"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M259.5 822V756.5H35.5L111 833.5V899L210 996.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M295.5 691H26.5L154.263 558"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M323.5 721L323.5 997L195.5 865.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M224.5 1117L224.5 1287"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M224.5 1809L224.5 1979"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M9.5 808.5V877.5H66.5L8.5 935.5V1016.5H125.5L182 1073.5H95.5L8.5 1131V1191L95.5 1145V1191L6 1283"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M926.5 1491.5V1426H702.5L778 1503V1568.5L877 1666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1040.5 1496V1644L1127.5 1555.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M389.5 1804L389.5 1859"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1055.5 1804L1055.5 1859"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1740.5 1804L1740.5 1859"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2406.5 1804L2406.5 1859"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3092.5 1804L3092.5 1859"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 1804L3758.5 1859"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M324.5 1742L324.5 2018L452.5 1886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 1742L990.5 2018L1118.5 1886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 1742L1675.5 2018L1803.5 1886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2341.5 1742L2341.5 2018L2469.5 1886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3028.5 1743L3028.5 2019L3156.5 1887.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3693.5 1742L3693.5 2018L3821.5 1886.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2392.5 1496V1644L2479.5 1555.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3744.5 1497V1645L3831.5 1556.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2276.5 1491.5V1426H2052.5L2128 1503V1568.5L2227 1666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3628.5 1491.5V1426H3404.5L3480 1503V1568.5L3579 1666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1611.5 1491.5V1426H1387.5L1463 1503V1568.5L1562 1666"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M259.5 1489.5V1424H35.5L111 1501V1566.5L210 1664"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2963.5 1490.5V1425H2739.5L2815 1502V1567.5L2914 1665"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M990.5 1390L990.5 1666L862.5 1534.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2342.5 1390L2342.5 1666L2214.5 1534.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3695.5 1391L3695.5 1667L3567.5 1535.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1675.5 1390L1675.5 1666L1547.5 1534.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M324.5 1390L324.5 1666L196.5 1534.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3028.5 1389L3028.5 1665L2900.5 1533.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M960 1358.5H690.5L818.5 1227"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2312 1359.5H2042.5L2170.5 1228"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3664 1359.5H3394.5L3522.5 1228"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2998 1358.5H2728.5L2856.5 1227"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1648 1359.5H1378.5L1506.5 1228"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M375.5 1496V1644L461.5 1555.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1727.5 1496V1644L1813.5 1555.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3079.5 1496V1644L3165.5 1555.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M633.5 1359H360.5L491.459 1493"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1986.5 1357H1713.5L1844.46 1491"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3337.5 1358H3064.5L3195.46 1492"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1299.5 1359H1026.5L1157.46 1493"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2651.5 1357H2378.5L2509.46 1491"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M4003.5 1360H3730.5L3861.46 1494"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M501.5 1426H572.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1854.5 1424H1925.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3204.5 1425H3275.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2518.5 1424H2589.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3871.5 1424H3942.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1168.5 1426H1239.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M295.5 1360H26.5L154.263 1227"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1361.5 1496V1665.5H1476.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M9.5 1496V1665.5H124.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2713.5 1495V1664.5H2828.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M437 1665H516.5V1545.5L573 1488H676V1578.5L784 1671L610 1666.5V1548.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1789.5 1666H1869V1546.5L1925.5 1489H2028.5V1579.5L2136.5 1672L1962.5 1667.5V1549.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3140.5 1665H3220V1545.5L3276.5 1488H3379.5V1578.5L3487.5 1671L3313.5 1666.5V1548.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1087.5 1672H1178V1609.68L1223 1563V1475H1299.5V1672H1242.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2438.5 1671H2529V1608.68L2574 1562V1474H2650.5V1671H2593.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3791.5 1673H3882V1610.68L3927 1564V1476H4003.5V1673H3946.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M378.5 1741.5H500L545.5 1789L601.5 1729.5H651.5V1801.5L609.5 1848L674.5 1914.5L743.5 1844.5V1729.5H909"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1730.5 1741H1852L1897.5 1788.5L1953.5 1729H2003.5V1801L1961.5 1847.5L2026.5 1914L2095.5 1844V1729H2261"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3081.5 1741H3202L3248.5 1789.5L3304.5 1730H3354.5V1802L3312.5 1848.5L3377.5 1915L3446.5 1845V1730H3612"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M241 1740.5H118L75.5 1870L9.5 1801.5V1978"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1592 1741H1469L1426.5 1870.5L1360.5 1802V1978.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2945 1741H2822L2779.5 1870.5L2713.5 1802V1978.5"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1055.5 1741H1202V1803.5H1254.5V1741H1300.5V1978"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2407.5 1741H2554V1803.5H2606.5V1741H2652.5V1978"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3758.5 1740H3905V1802.5H3957.5V1740H4003.5V1977"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1364.5 1737H1419"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2717.5 1737H2772"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M12.5 1737H67"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M3664 2039.5H3394.5L3522.5 1908"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2999.5 2041H2730.5L2858.26 1908"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M2312 2039.5H2042.5L2170.5 1908"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M1647.5 2041H1378.5L1506.26 1908"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M960 2039.5H690.5L818.5 1908"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M295.5 2041H26.5L154.263 1908"
          stroke="#61cc9c"
          strokeWidth="8"
          strokeLinecap="square"
        />
      </svg>

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, transparent, rgb(0, 0, 0, 0.9))",
        }}
      ></div>
    </div>
  );
}

export default PatternBackground;
