import { create } from "zustand";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  isChatOpen: false,
  isDetailOpen: false,

  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
        isChatOpen: true,
        isDetailOpen: false,
      });
    } else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
        isChatOpen: true,
        isDetailOpen: false,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
        isChatOpen: true,
        isDetailOpen: false,
      });
    }
  },

  toggleDetail: () => {
    set((state) => ({
      isChatOpen: !state.isDetailOpen,
      isDetailOpen: !state.isDetailOpen,
    }));
  },

  setDetailOpen: (isOpen) => {
    set({ isDetailOpen: isOpen });
  },


  changeBlock: () => {
    set((state) => ({ isReceiverBlocked: !state.isReceiverBlocked }));
  },

  resetChat: () => {
    set({
      chatId: null,
      user: null,
      isCurrentUserBlocked: false,
      isReceiverBlocked: false,
      isChatOpen: false,
      isDetailOpen: false,
    });
  },
}));
