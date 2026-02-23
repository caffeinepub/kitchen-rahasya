import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { OrderInput } from '../backend';

export function useSubmitOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (orderInput: OrderInput) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }
      return await actor.submitOrder(orderInput);
    },
    onSuccess: () => {
      // Invalidate any order-related queries if needed in the future
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
}
