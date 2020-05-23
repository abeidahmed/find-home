import React from "react";

const Glyph = ({ icon }) => {
  switch (icon) {
    case "add-image":
      return (
        <g>
          <path d="M4,5h13v7h2V5c0-1.103-0.897-2-2-2H4C2.897,3,2,3.897,2,5v12c0,1.103,0.897,2,2,2h8v-2H4V5z" />
          <path d="M8 11L5 15 16 15 12 9 9 13z" />
          <path d="M19 14L17 14 17 17 14 17 14 19 17 19 17 22 19 22 19 19 22 19 22 17 19 17z" />
        </g>
      );
    case "aeroplane":
      return (
        <g>
          <path d="M20.563 3.33994C20.271 3.14094 19.896 3.11094 19.574 3.26094L2.57396 11.2609C2.21896 11.4289 1.99496 11.7879 1.99996 12.1799C2.00596 12.5719 2.23996 12.9249 2.59996 13.0819L7.99996 15.4449V22.1669L13.836 17.9989L18.6 20.0829C18.728 20.1399 18.865 20.1669 19 20.1669C19.181 20.1669 19.36 20.1179 19.52 20.0209C19.798 19.8519 19.977 19.5579 19.999 19.2329L20.999 4.23294C21.021 3.87894 20.856 3.53994 20.563 3.33994ZM18.097 17.6799L12.828 15.3739L16 9.16694L8.35096 13.4169L5.41896 12.1339L18.89 5.79394L18.097 17.6799Z" />
        </g>
      );
    case "alert":
      return (
        <g>
          <path d="M9.40204 3.4998C10.557 1.50039 13.4429 1.50039 14.5979 3.4998L21.5259 15.4998C22.681 17.4995 21.2378 20 18.928 20H5.07196C2.76222 20 1.319 17.4997 2.47393 15.5C2.47397 15.4999 2.47389 15.5001 2.47393 15.5L9.40204 3.4998ZM11.1339 4.50019L4.20599 16.5C3.82113 17.1662 4.30177 18 5.07196 18H18.928C19.6981 18 20.1789 17.1664 19.794 16.5002L12.866 4.50019C12.481 3.8336 11.5189 3.8336 11.1339 4.50019ZM12 7.99999C12.5522 7.99999 13 8.44771 13 8.99999V11C13 11.5523 12.5522 12 12 12C11.4477 12 11 11.5523 11 11V8.99999C11 8.44771 11.4477 7.99999 12 7.99999ZM11 15C11 14.4477 11.4477 14 12 14H12.01C12.5622 14 13.01 14.4477 13.01 15C13.01 15.5523 12.5622 16 12.01 16H12C11.4477 16 11 15.5523 11 15Z" />
        </g>
      );
    case "bell":
      return (
        <g>
          <path d="M19 13.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V13.586L3.293 15.293C3.105 15.48 3 15.734 3 16V18C3 18.553 3.447 19 4 19H20C20.553 19 21 18.553 21 18V16C21 15.734 20.895 15.48 20.707 15.293L19 13.586ZM19 17H5V16.414L6.707 14.707C6.895 14.52 7 14.266 7 14V10C7 7.243 9.243 5 12 5C14.757 5 17 7.243 17 10V14C17 14.266 17.105 14.52 17.293 14.707L19 16.414V17ZM12 22C13.311 22 14.407 21.166 14.818 20H9.182C9.593 21.166 10.689 22 12 22Z" />
        </g>
      );
    case "book":
      return (
        <g>
          <path d="M21,3h-7c-0.771,0-1.468,0.301-2,0.78C11.468,3.301,10.771,3,10,3H3C2.447,3,2,3.448,2,4v15c0,0.553,0.447,1,1,1h5.758 c0.526,0,1.042,0.214,1.414,0.586l1.121,1.121c0.009,0.009,0.021,0.012,0.03,0.021c0.086,0.079,0.182,0.149,0.294,0.196 c0.001,0,0.001,0,0.002,0C11.74,21.974,11.869,22,12,22s0.26-0.026,0.381-0.076c0.001,0,0.001,0,0.002,0 c0.112-0.047,0.208-0.117,0.294-0.196c0.009-0.009,0.021-0.012,0.03-0.021l1.121-1.121C14.2,20.214,14.716,20,15.242,20H21 c0.553,0,1-0.447,1-1V4C22,3.448,21.553,3,21,3z M8.758,18H4V5h6c0.552,0,1,0.449,1,1v12.689C10.342,18.246,9.557,18,8.758,18z M20,18h-4.758c-0.799,0-1.584,0.246-2.242,0.689V6c0-0.551,0.448-1,1-1h6V18z" />
        </g>
      );
    case "briefcase":
      return (
        <g>
          <path d="M20 6H17V4C17 2.897 16.103 2 15 2H9C7.897 2 7 2.897 7 4V6H4C2.897 6 2 6.897 2 8V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V8C22 6.897 21.103 6 20 6ZM15 4V6H9V4H15ZM8 8H16H20V11H4V8H8ZM4 19V13H10V15H14V13H20L20.001 19H4Z" />
        </g>
      );
    case "briefcase-solid":
      return (
        <g>
          <path d="M20 6H17V4C17 2.897 16.103 2 15 2H9C7.897 2 7 2.897 7 4V6H4C2.897 6 2 6.897 2 8V11H22V8C22 6.897 21.103 6 20 6ZM9 4H15V6H9V4ZM14 14H10V12H2V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V12H14V14Z" />
        </g>
      );
    case "calendar":
      return (
        <g>
          <path d="M11 12H17V18H11V12Z" />
          <path d="M19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V8V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V8V6C21 4.897 20.103 4 19 4ZM19.001 20H5V8H19L19.001 20Z" />
        </g>
      );
    case "check":
      return (
        <g>
          <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z" />
        </g>
      );
    case "chevron-down":
      return (
        <g>
          <path d="M16.939 7.939L12 12.879L7.06096 7.939L4.93896 10.061L12 17.121L19.061 10.061L16.939 7.939Z" />
        </g>
      );
    case "chevron-left":
      return (
        <g>
          <path d="M13.939 4.939L6.87903 12L13.939 19.061L16.061 16.939L11.121 12L16.061 7.061L13.939 4.939Z" />
        </g>
      );
    case "chevron-right":
      return (
        <g>
          <path d="M10.061 19.061L17.121 12L10.061 4.939L7.93896 7.061L12.879 12L7.93896 16.939L10.061 19.061Z" />
        </g>
      );
    case "clock-solid":
      return (
        <g>
          <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM15.293 16.707L11 12.414V6H13V11.586L16.707 15.293L15.293 16.707Z" />
        </g>
      );
    case "close":
      return (
        <g>
          <path d="M16.192 6.34399L11.949 10.586L7.70697 6.34399L6.29297 7.75799L10.535 12L6.29297 16.242L7.70697 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z" />
        </g>
      );
    case "cog":
      return (
        <g>
          <path d="M12 16C14.206 16 16 14.206 16 12C16 9.794 14.206 8 12 8C9.794 8 8 9.794 8 12C8 14.206 9.794 16 12 16ZM12 10C13.084 10 14 10.916 14 12C14 13.084 13.084 14 12 14C10.916 14 10 13.084 10 12C10 10.916 10.916 10 12 10Z" />
          <path d="M2.84498 16.136L3.84498 17.866C4.37598 18.783 5.65398 19.127 6.57498 18.596L7.10398 18.29C7.68598 18.747 8.32498 19.122 8.99998 19.402V20C8.99998 21.103 9.89698 22 11 22H13C14.103 22 15 21.103 15 20V19.402C15.675 19.122 16.314 18.747 16.896 18.291L17.425 18.597C18.348 19.127 19.623 18.785 20.156 17.866L21.155 16.137C21.707 15.182 21.379 13.956 20.424 13.405L19.919 13.113C19.973 12.742 20 12.371 20 12C20 11.629 19.973 11.257 19.919 10.889L20.424 10.597C21.379 10.045 21.707 8.82 21.155 7.865L20.156 6.136C19.625 5.216 18.348 4.871 17.425 5.404L16.896 5.71C16.314 5.253 15.675 4.878 15 4.598V4C15 2.897 14.103 2 13 2H11C9.89698 2 8.99998 2.897 8.99998 4V4.598C8.32498 4.878 7.68598 5.253 7.10398 5.709L6.57498 5.403C5.65098 4.872 4.37498 5.216 3.84398 6.135L2.84498 7.864C2.29298 8.819 2.62098 10.045 3.57598 10.596L4.08098 10.888C4.02698 11.257 3.99998 11.629 3.99998 12C3.99998 12.371 4.02698 12.742 4.08098 13.111L3.57598 13.403C2.62098 13.955 2.29298 15.181 2.84498 16.136ZM6.17098 13.378C6.05798 12.925 5.99998 12.461 5.99998 12C5.99998 11.538 6.05798 11.074 6.16998 10.622C6.27798 10.189 6.08698 9.737 5.69998 9.514L4.57698 8.864L5.57498 7.135L6.71998 7.797C7.10398 8.018 7.58698 7.962 7.90798 7.655C8.59098 7.008 9.41498 6.524 10.292 6.256C10.713 6.128 11 5.739 11 5.3V4H13V5.3C13 5.739 13.287 6.128 13.708 6.256C14.585 6.525 15.409 7.008 16.092 7.655C16.413 7.962 16.898 8.017 17.28 7.797L18.424 7.136L19.424 8.865L18.3 9.514C17.913 9.738 17.722 10.19 17.83 10.622C17.942 11.074 18 11.538 18 12C18 12.461 17.942 12.925 17.829 13.378C17.722 13.811 17.913 14.263 18.3 14.486L19.423 15.135L18.425 16.864L17.28 16.203C16.897 15.982 16.413 16.037 16.092 16.345C15.409 16.992 14.585 17.476 13.708 17.744C13.287 17.872 13 18.261 13 18.7L13.002 20H11V18.7C11 18.261 10.713 17.872 10.292 17.744C9.41498 17.475 8.59098 16.992 7.90798 16.345C7.71798 16.163 7.46998 16.07 7.21998 16.07C7.04798 16.07 6.87598 16.114 6.71998 16.204L5.57598 16.866L4.57598 15.137L5.69998 14.486C6.08698 14.263 6.27798 13.811 6.17098 13.378Z" />
        </g>
      );
    case "dollar":
      return (
        <g>
          <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" />
          <path d="M12 11C10 11 10 10.374 10 9.99999C10 9.51599 10.701 8.99999 12 8.99999C13.185 8.99999 13.386 9.63799 13.4 10.018L14.4 9.99999H15.4C15.4 8.97399 14.734 7.53099 13 7.12099V6.01199H11V7.08499C9.029 7.41599 8 8.71199 8 9.99999C8 11.12 8.52 13 12 13C14 13 14 13.676 14 14C14 14.415 13.38 15 12 15C10.159 15 10.011 14.143 10 14H8C8 14.918 8.661 16.553 11 16.92V18H13V16.915C14.971 16.584 16 15.288 16 14C16 12.88 15.48 11 12 11Z" />
        </g>
      );
    case "dots-horizontal":
      return (
        <g>
          <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z" />
        </g>
      );
    case "facebook-solid":
      return (
        <g>
          <path d="M12.001 2.00201C6.47895 2.00201 2.00195 6.47901 2.00195 12.001C2.00195 16.991 5.65795 21.127 10.439 21.88V14.892H7.89895V12.001H10.439V9.79801C10.439 7.29001 11.932 5.90701 14.215 5.90701C15.309 5.90701 16.455 6.10201 16.455 6.10201V8.56101H15.191C13.951 8.56101 13.563 9.33301 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47901 17.523 2.00201 12.001 2.00201Z" />
        </g>
      );
    case "home":
      return (
        <g>
          <path d="M2.99995 13H3.99995V15V20C3.99995 21.103 4.89694 22 5.99995 22H8.99995H14.9999H17.9999C19.1029 22 19.9999 21.103 19.9999 20V15V13H20.9999C21.4039 13 21.7699 12.756 21.9239 12.383C22.0789 12.009 21.9929 11.579 21.7069 11.293L12.7069 2.29301C12.3159 1.90201 11.6839 1.90201 11.2929 2.29301L2.29295 11.293C2.00695 11.579 1.92095 12.009 2.07595 12.383C2.22995 12.756 2.59595 13 2.99995 13ZM9.99994 20V15H13.9999V20H9.99994ZM11.9999 4.41401L17.9999 10.414V15L18.0009 20H15.9999V15C15.9999 13.897 15.1029 13 13.9999 13H9.99994C8.89694 13 7.99995 13.897 7.99995 15V20H5.99995V15V12V10.414L11.9999 4.41401Z" />
        </g>
      );
    case "lock":
      return (
        <g>
          <path d="M20,12c0-1.103-0.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v3H6c-1.103,0-2,0.897-2,2v8c0,1.103,0.897,2,2,2h12 c1.103,0,2-0.897,2-2V12z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v3H9V7z" />
        </g>
      );
    case "menu":
      return (
        <g>
          <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
        </g>
      );
    case "message":
      return (
        <g>
          <path d="M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z" />
          <path d="M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z" />
        </g>
      );
    case "pen":
      return (
        <g>
          <path d="M18.404,2.998c-0.757-0.754-2.077-0.751-2.828,0.005l-1.784,1.791L11.586,7H7C6.579,7,6.204,7.263,6.061,7.658l-4,11 c-0.133,0.365-0.042,0.774,0.232,1.049l2,2C4.483,21.898,4.739,22,5,22c0.114,0,0.23-0.02,0.342-0.061l11-4 C16.737,17.796,17,17.421,17,17v-4.586l2.207-2.207c0,0,0,0,0-0.001c0.001,0,0.001,0,0.001,0L21,8.409 c0.378-0.378,0.586-0.881,0.585-1.415c0-0.535-0.209-1.038-0.588-1.415L18.404,2.998z M15.293,11.293 C15.105,11.48,15,11.734,15,12v4.3l-9.249,3.363l4.671-4.671C10.448,14.993,10.474,15,10.5,15c0.828,0,1.5-0.672,1.5-1.5 S11.328,12,10.5,12S9,12.672,9,13.5c0,0.026,0.007,0.052,0.008,0.078l-4.671,4.671L7.7,9H12c0.266,0,0.52-0.105,0.707-0.293 L14.5,6.914L17.086,9.5L15.293,11.293z M18.499,8.085l-2.586-2.586l1.079-1.084l2.593,2.581L18.499,8.085z" />
        </g>
      );
    case "plus":
      return (
        <g>
          <path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z" />
        </g>
      );
    case "search":
      return (
        <g>
          <path d="M10 18C11.846 18 13.543 17.365 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.365 13.543 18 11.846 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" />
        </g>
      );
    case "sign-out":
      return (
        <g>
          <path d="M16 13V11H7V8L2 12L7 16V13H16Z" />
          <path d="M20 3H11C9.897 3 9 3.897 9 5V9H11V5H20V19H11V15H9V19C9 20.103 9.897 21 11 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3Z" />
        </g>
      );
    case "slider":
      return (
        <g>
          <path d="M7.5 14.5c-1.58 0-2.903 1.06-3.337 2.5H2v2h2.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2H10.837C10.403 15.56 9.08 14.5 7.5 14.5zM7.5 19.5C6.673 19.5 6 18.827 6 18s.673-1.5 1.5-1.5S9 17.173 9 18 8.327 19.5 7.5 19.5zM16.5 8.5c-1.58 0-2.903 1.06-3.337 2.5H2v2h11.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2h-2.163C19.403 9.56 18.08 8.5 16.5 8.5zM16.5 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5S18 11.173 18 12 17.327 13.5 16.5 13.5z" />
          <path d="M12.837,5C12.403,3.56,11.08,2.5,9.5,2.5S6.597,3.56,6.163,5H2v2h4.163C6.597,8.44,7.92,9.5,9.5,9.5s2.903-1.06,3.337-2.5 h9.288V5H12.837z M9.5,7.5C8.673,7.5,8,6.827,8,6s0.673-1.5,1.5-1.5S11,5.173,11,6S10.327,7.5,9.5,7.5z" />
        </g>
      );
    case "sort-solid":
      return (
        <g>
          <path d="M6.22694 11H17.7739C18.6359 11 19.0939 9.98 18.5209 9.335L12.7479 2.84C12.3509 2.392 11.6509 2.392 11.2539 2.84L5.47894 9.335C4.90594 9.98 5.36394 11 6.22694 11ZM11.2529 21.159C11.6499 21.607 12.3499 21.607 12.7469 21.159L18.5199 14.664C19.0939 14.02 18.6359 13 17.7729 13H6.22694C5.36494 13 4.90694 14.02 5.47994 14.665L11.2529 21.159Z" />
        </g>
      );
    case "spinner":
      return (
        <g>
          <path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z" />
        </g>
      );
    case "twitter-solid":
      return (
        <g>
          <path d="M19.633 7.99701C19.646 8.17201 19.646 8.34601 19.646 8.52001C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.856 18.222 6.589 17.586 7.974 16.501C6.203 16.464 4.719 15.304 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C4.182 13.259 2.799 11.638 2.799 9.68001V9.63001C3.336 9.92901 3.959 10.116 4.619 10.141C3.534 9.41901 2.823 8.18401 2.823 6.78701C2.823 6.03901 3.022 5.35301 3.371 4.75501C5.354 7.19801 8.335 8.79501 11.677 8.97001C11.615 8.67001 11.577 8.35901 11.577 8.04701C11.577 5.82701 13.373 4.01901 15.605 4.01901C16.765 4.01901 17.812 4.50501 18.548 5.29101C19.458 5.11601 20.33 4.77901 21.104 4.31801C20.805 5.25301 20.168 6.03901 19.333 6.53801C20.144 6.45001 20.93 6.22601 21.652 5.91401C21.104 6.71201 20.419 7.42301 19.633 7.99701Z" />
        </g>
      );
    case "user":
      return (
        <g>
          <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 10C10.346 10 9 8.654 9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7C15 8.654 13.654 10 12 10ZM21 21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H5V20C5 17.243 7.243 15 10 15H14C16.757 15 19 17.243 19 20V21H21Z" />
        </g>
      );

    case "users":
      return (
        <g>
          <path d="M16.604 11.048C17.208 10.019 17.476 8.82 17.355 7.608C17.176 5.824 16.18 4.247 14.552 3.168L13.447 4.834C14.566 5.576 15.247 6.633 15.365 7.808C15.475 8.913 15.085 10.002 14.293 10.794L13.101 11.986L14.719 12.461C18.951 13.701 19 17.957 19 18H21C21 16.211 20.044 12.715 16.604 11.048Z" />
          <path d="M9.5 12C11.706 12 13.5 10.206 13.5 8C13.5 5.794 11.706 4 9.5 4C7.294 4 5.5 5.794 5.5 8C5.5 10.206 7.294 12 9.5 12ZM9.5 6C10.603 6 11.5 6.897 11.5 8C11.5 9.103 10.603 10 9.5 10C8.397 10 7.5 9.103 7.5 8C7.5 6.897 8.397 6 9.5 6ZM11 13H8C4.691 13 2 15.691 2 19V20H4V19C4 16.794 5.794 15 8 15H11C13.206 15 15 16.794 15 19V20H17V19C17 15.691 14.309 13 11 13Z" />
        </g>
      );
    case "zap":
      return (
        <g>
          <path d="M20.9799 11.802C20.9039 11.424 20.6169 11.123 20.2419 11.031L13.3819 9.31499L15.9189 3.39399C16.1009 2.97099 15.9699 2.47799 15.6019 2.20199C15.2329 1.92299 14.7229 1.93399 14.3679 2.22599L3.36794 11.226C3.07494 11.466 2.94194 11.85 3.02494 12.219C3.10694 12.588 3.39094 12.879 3.75794 12.97L10.4769 14.651L7.13194 20.505C6.89694 20.917 6.98294 21.437 7.33794 21.751C7.52594 21.916 7.76294 22 7.99994 22C8.21094 22 8.42194 21.934 8.59994 21.8L20.5999 12.8C20.9079 12.568 21.0569 12.181 20.9799 11.802Z" />
        </g>
      );
    default:
      return null;
  }
};

const Icon = ({ icon, ...props }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <Glyph icon={icon} />
    </svg>
  );
};

export default Icon;
