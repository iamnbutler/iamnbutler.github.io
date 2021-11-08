<template>
  <div class="font-mono">
    <nav role="navigation" class="flex flex-col mb-8">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/post">Posts</NavLink>
      <NavLink to="/project">Projects</NavLink>
    </nav>
    <div class="sandbox">
      <p>{{ $colorMode.value }}</p>
      <select v-model="$colorMode.preference" class="border border-black">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
</template>
