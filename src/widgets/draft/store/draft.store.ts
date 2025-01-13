import { Layout } from '@/shared/types/props.types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IDraftStore {
	layout: Layout
	setLayout: (value: Layout) => void
}

export const useDraftStore = create<IDraftStore>()(
	persist(
		set => ({
			layout: Layout.LIST,
			setLayout: value => set({ layout: value })
		}),
		{
			name: 'draft-layout',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
