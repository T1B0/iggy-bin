
import type { CommandResponse } from '../../tcp.client.js';
import { type Id } from '../identifier.utils.js';
import { serializeTargetGroup, deserializeConsumerGroup } from './group.utils.js';

export const GET_GROUP = {
  code: 600,

  serialize: (streamId: Id, topicId: Id, groupId: Id) => {
    return serializeTargetGroup(streamId, topicId, groupId);
  },

  deserialize: (r: CommandResponse) => {
    return deserializeConsumerGroup(r.data);
  }
};
