<template>
  <div class="font-mono p-8 mr-8">
    <nav role="navigation" class="flex flex-col p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/post">Posts</NavLink>
      <NavLink to="/project">Projects</NavLink>
    </nav>
    <div class="sandbox p-4">
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
