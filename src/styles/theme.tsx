import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
export const customTheme = extendTheme({
  fonts: {
    heading: `Poppins`,
    body: `Poppins`,
  },
  config,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#C4C4C4",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          border: "none",
          bgColor: "lightMode.menuBg",
          size: "sm",
          color: "#fff",
          fontWeight: "100",
          boxShadow: "lg",
          _hover: {
            bgColor: "lightMode.menuBg",
            boxShadow: "lg",
            color: "#fff",
            border: "none",
          },
          _focus: {
            bgColor: "",
            boxShadow: "lg",
            color: "#fff",
          },
          _active: {
            bgColor: "",
            boxShadow: "lg",
            color: "#fff",
            filter: "brightness(50%)",
          },
        },
        secondary: {
          bgColor: "#eeeef1",
          size: "md",
          border: "none",
          boxShadow: "lg",
          color: "#000",
          fontWeight: "700",
          _hover: {
            bgColor: "gray.300",
            boxShadow: "lg",
            color: "#000",
            border: "none",
          },
          _focus: {
            bgColor: "gray.300",
            boxShadow: "lg",
            color: "#000",
          },
          _active: {
            bgColor: "gray.300",
            boxShadow: "lg",
            color: "#000",
            filter: "brightness(90%)",
          },
        },
        danger: {
          bgColor: "red.500",
          color: "#f3f3f3",
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Input: {
      variants: {
        text: {
          field: {
            bg: "#eeeef1",
            borderColor: "lightMode.menuBg",
            border: "1px solid",
            _placeholder: {
              color: "gray",
            },
            color: "#000",
            boxShadow: "0px 2px 6px 0px #000",
          },
        },
      },
      defaultProps: {
        variant: "text",
      },
    },
  },
  colors: {
    purpleColor: "#121139",
    whiteC: "#f4f4f4",
  },
});
