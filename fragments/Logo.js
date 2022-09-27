const Text = ({ className }) => {
  return (
    <p
      style={{ color: "#3F4882" }}
      className={`text-2xl font-bold text-[#3F4882] ${className}`}
    >
      pandaal
    </p>
  );
};

const Icon = ({ className }) => {
  return (
    <svg
      width="278"
      height="271"
      viewBox="0 0 278 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXLink="http://www.w3.org/1999/xlink"
    >
      <rect width="278" height="271" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_74_2"
            transform="scale(0.00359712 0.00369004)"
          />
        </pattern>
        <image
          id="image0_74_2"
          width="278"
          height="271"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const Logo = { Text: Text, Icon: Icon };

export default Logo;
