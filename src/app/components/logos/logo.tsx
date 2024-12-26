export default function SoloLogo({
  className = '', 
  textColor = 'white',  // Default text color is white
  fillColor = '#FE526C',     // Default fill color for the background rectangle
  strokeColor = '#E9435C'       // Default stroke color for the border
}: {
  className?: string;
  textColor?: string;
  fillColor?: string;
  strokeColor?: string;
}) {
  if(!textColor || !fillColor || !strokeColor){
     textColor = "white"
     fillColor = "#FE526C"
     strokeColor = "#E9435C"
  }
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_87_260)">
        {/* Rectangle background with dynamic fill color */}
        <rect
          width="35.75"
          height="35.75"
          rx="6.5"
          fill={fillColor}
          className={className}
        />
        {/* Path with dynamic text color */}
        <path
          d="M26.1619 23.2898H20.8632L20.8346 20.6761H25.462C26.2428 20.6761 26.9045 20.5619 27.4473 20.3334C27.9995 20.0953 28.4185 19.7573 28.7041 19.3193C28.9897 18.8718 29.1326 18.3339 29.1326 17.7054C29.1326 17.0104 28.9993 16.4438 28.7327 16.0059C28.4661 15.5679 28.0566 15.2489 27.5044 15.049C26.9617 14.849 26.2666 14.749 25.4192 14.749H21.9486V32.6875H18.3638V11.8926H25.4192C26.5618 11.8926 27.5806 12.0021 28.4756 12.2211C29.3801 12.4401 30.1466 12.7828 30.775 13.2494C31.413 13.7064 31.8938 14.2872 32.2175 14.9918C32.5508 15.6964 32.7174 16.5343 32.7174 17.5055C32.7174 18.3624 32.5127 19.1479 32.1033 19.8621C31.6938 20.5667 31.0892 21.1427 30.2894 21.5902C29.4896 22.0377 28.4946 22.3043 27.3044 22.39L26.1619 23.2898ZM26.0048 32.6875H19.7349L21.3488 29.8453H26.0048C26.8141 29.8453 27.4901 29.712 28.0328 29.4454C28.5756 29.1693 28.9802 28.7932 29.2468 28.3171C29.5229 27.8315 29.661 27.265 29.661 26.6176C29.661 25.9415 29.542 25.356 29.304 24.8608C29.0659 24.3562 28.6898 23.9706 28.1757 23.704C27.6615 23.4279 26.9902 23.2898 26.1619 23.2898H22.1343L22.1628 20.6761H27.4044L28.2185 21.6616C29.3611 21.6997 30.299 21.952 31.0321 22.4186C31.7748 22.8851 32.327 23.4897 32.6888 24.2324C33.0507 24.9751 33.2316 25.7749 33.2316 26.6318C33.2316 27.9553 32.9412 29.0646 32.3604 29.9596C31.7891 30.8546 30.9655 31.5354 29.8895 32.002C28.8136 32.459 27.5187 32.6875 26.0048 32.6875Z"
          fill={textColor}
        />
      </g>
      {/* Rectangle border with dynamic stroke color */}
      <rect
        x="0.40625"
        y="0.40625"
        width="34.9375"
        height="34.9375"
        rx="6.09375"
        stroke={strokeColor}
        strokeWidth="0.8125"
        className={className}
      />
      <defs>
        <clipPath id="clip0_87_260">
          <rect width="35.75" height="35.75" rx="6.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
