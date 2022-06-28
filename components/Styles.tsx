const interaction = {
  active: `shadow-inner hover:shadow-inner`,
  common: `flex rounded-lg border border-transparent hover:shadow-xl transition-all`,
}

export const buttonStyle = {
  active: `text-base0A bg-base0A/10 hover:bg-base0A/20 border-base0A/40 ${interaction.active}`,
  inactive: `hover:bg-base0A/10 hover:border-base0A/20 hover:text-base0A text-base0D/70`,
  common: `${interaction.common} p-2`,
}

export const buttonGroupStyle = {
  active: `text-base0A bg-base0A/10 hover:bg-base0A/20 border-base0A/40 ${interaction.active}`,
  inactive: `hover:bg-base0A/10 hover:border-base0A/20 hover:text-base0A text-base0D/70`,
  common: `group overflow-hidden flex h-8 rounded-lg border border-base03 hover:shadow-xl transition-all`,
}

export const navLinkStyle = {
  active: `text-base0D bg-base0D/10 hover:bg-base0D/20 border-base0D/40 ${interaction.active}`,
  inactive: `hover:bg-base0D/10 hover:border-base0D/20 hover:text-base0D text-base0D/70`,
  common: `${interaction.common} text-base flex font-bold px-4 py-1.5 shadow-base0D/10 hover:shadow-base0D/10`,
}
