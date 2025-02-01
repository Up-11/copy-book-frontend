import { Layout } from '@/shared/types/props.types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ILayoutStore {
	layout: Layout
	setLayout: (value: Layout) => void
}

export const useLayoutStore = create<ILayoutStore>()(
	persist(
		set => ({
			layout: Layout.LIST,
			setLayout: value => set({ layout: value })
		}),
		{
			name: 'layout',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
