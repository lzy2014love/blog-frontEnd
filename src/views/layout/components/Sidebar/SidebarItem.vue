<template>
  <div
    v-if="!item.hidden && item.children"
    class="menu-wrapper">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      ">
      <AppLink :to="resolvePath(onlyOneChild.path)">
        <ElMenuItem
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }">
          <Item
            v-if="onlyOneChild.meta"
            :icon="onlyOneChild.meta.icon || item.meta.icon"
            :title="onlyOneChild.meta.title" />
        </ElMenuItem>
      </AppLink>
    </template>

    <ElSubmenu
      v-else
      :index="resolvePath(item.path)">
      <template slot="title">
        <Item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="item.meta.title" />
      </template>

      <template
        v-for="child in item.children">
        <template v-if="!child.hidden">
          <SidebarItem
            v-if="child.children && child.children.length > 0"
            :is-nest="true"
            :item="child"
            :key="child.path"
            :base-path="resolvePath(child.path)"
            class="nest-menu" />
          <AppLink
            v-else
            :to="resolvePath(child.path)"
            :key="child.name">
            <ElMenuItem :index="resolvePath(child.path)">
              <Item
                v-if="child.meta"
                :icon="child.meta.icon"
                :title="child.meta.title" />
            </ElMenuItem>
          </AppLink>
        </template>
      </template>
    </ElSubmenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils'
import Item from './Item.vue'
import AppLink from './Link.vue'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      onlyOneChild: null,
    }
  },
  methods: {
    hasOneShowingChild(children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        }
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item
        return true
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (this.isExternalLink(routePath)) {
        return routePath
      }
      return path.resolve(this.basePath, routePath)
    },
    isExternalLink(routePath) {
      return isExternal(routePath)
    },
  },
}
</script>
