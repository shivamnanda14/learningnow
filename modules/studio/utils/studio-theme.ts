export const studioTheme = {
  colors: {
    background: "bg-black",
    surface: "bg-zinc-900",
    surfaceHover: "hover:bg-zinc-800",

    border: "border-zinc-800",

    text: {
      primary: "text-white",
      secondary: "text-zinc-400",
      muted: "text-zinc-500",
    },

    accent: {
      background: "bg-purple-600",
      hover: "hover:bg-purple-700",
      text: "text-purple-400",
    },

    success: "bg-green-600",

    danger: "bg-red-600",

    warning: "bg-yellow-600",
  },

  radius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
  },

  shadow: {
    card: "shadow-lg",
  },
} as const;