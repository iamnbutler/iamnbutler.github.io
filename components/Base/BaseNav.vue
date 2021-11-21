<template>
  <nav class="flex justify-between h-full font-bold site-nav">
    <div class="flex left">
      <div
        class="flex items-center h-full pr-4 bg-white logo mix-blend-exclusion"
      >
        <Icon name="Leaf" :button="false" />
        <p class="pt-px text-black">nate butler</p>
      </div>
      <Icon name="Home" spaced />
      <Icon name="Folder" spaced />
      <Icon name="Tag" spaced />
      <Spacer />
      <Icon name="Search" spaced />
    </div>
    <div class="flex right">
      <div class="flex items-center h-full pr-4">
        <Icon name="LocationArrow" :button="false" />
        <p class="pt-1 text-xs leading-3 text-right mix-blend-exclusion">
          43.686321<br />
          -79.621780
        </p>
      </div>
      <Icon name="Menu" />
    </div>
  </nav>
</template>