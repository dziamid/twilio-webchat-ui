/*! @twilio/flex-webchat-ui.js 1.0.0
The following license applies to all parts of this software except as documented below.

Copyright (c) 2018 Twilio, Inc.
All rights reserved.

 Licensed under the Apache License, Version 2.0 (the “License”);
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an “AS IS” BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.


This software includes react under the following license.

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


This software includes redux under the following license.
Copyright (c) 2015-present Dan Abramov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


This software includes semver under the following license.
Copyright (c) Isaac Z. Schlueter and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


This software includes loglevel under the following license.
Copyright (c) 2013 Tim Perry

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


This software includes hoist-non-react-statics under the following license.

Software License Agreement (BSD License)
========================================

Copyright (c) 2015, Yahoo! Inc. All rights reserved.
----------------------------------------------------

Redistribution and use of this software in source and binary forms, with or
without modification, are permitted provided that the following conditions are
met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
  * Neither the name of Yahoo! Inc. nor the names of YUI's contributors may be
    used to endorse or promote products derived from this software without
    specific prior written permission of Yahoo! Inc.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/
!(function(n, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
        ? (exports.Flex = e())
        : ((n.Twilio = n.Twilio || {}), (n.Twilio.Flex = e()));
})(window, function() {
  return (function(n) {
    var e = {};
    function t(o) {
      if (e[o]) return e[o].exports;
      var r = (e[o] = { i: o, l: !1, exports: {} });
      return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    return (
      (t.m = n),
      (t.c = e),
      (t.d = function(n, e, o) {
        t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: o });
      }),
      (t.r = function(n) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(n, '__esModule', { value: !0 });
      }),
      (t.t = function(n, e) {
        if ((1 & e && (n = t(n)), 8 & e)) return n;
        if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
        var o = Object.create(null);
        if (
          (t.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: n }),
          2 & e && 'string' != typeof n)
        )
          for (var r in n)
            t.d(
              o,
              r,
              function(e) {
                return n[e];
              }.bind(null, r)
            );
        return o;
      }),
      (t.n = function(n) {
        var e =
          n && n.__esModule
            ? function() {
                return n.default;
              }
            : function() {
                return n;
              };
        return t.d(e, 'a', e), e;
      }),
      (t.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
      }),
      (t.p = '/assets/'),
      t((t.s = 32))
    );
  })([
    function(n, e) {
      n.exports = require('@twilio/frame-ui');
    },
    function(n, e) {
      n.exports = require('react');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(38).getLogger('twilio-flex-webchat-ui');
      (e.log = o), (e.default = o);
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(12),
        i = t(40),
        a = t(0),
        s = t(7),
        c = t(41),
        u = t(6),
        l = t(8),
        f = t(42),
        p = t(43),
        d = t(2),
        g = {
          identity: void 0,
          sessionData: void 0,
          isEntryPointExpanded: !1,
          channelSid: void 0,
          taskSid: void 0,
          engagementStage: u.INIT_ENGAGEMENT,
          ignorePersisted: !1,
          preEngagementReady: !1,
          avatars: void 0,
          waitingTimeoutSeconds: void 0,
          tokenPayload: void 0,
        };
      e.reduce = function(n, e) {
        switch ((void 0 === n && (n = g), e.type)) {
          case u.ACTION_TOGGLE_ENTRY_POINT:
            return o({}, n, { isEntryPointExpanded: !n.isEntryPointExpanded });
          case u.ACTION_SET_ENTRY_POINT_EXPANDED:
            return o({}, n, { isEntryPointExpanded: e.isEntryPointExpanded });
          case u.ACTION_SET_IDENTITY:
            return o({}, n, { identity: e.identity });
          case u.ACTION_SET_CHANNEL_SID:
            return o({}, n, { channelSid: e.channelSid });
          case u.ACTION_SET_ACCESS_TOKEN:
            return o({}, n, { tokenPayload: e.accessToken });
          case u.ACTION_SET_TASK_SID:
            return o({}, n, { taskSid: e.taskSid });
          case u.ACTION_SET_ENGAGEMENT_STAGE:
          case u.ACTION_SET_ENGAGEMENT_STAGE:
            return o({}, n, { engagementStage: e.engagementStage });
          case u.ACTION_SET_DISABLE_LOCAL_STORAGE:
            return o({}, n, { ignorePersisted: !0 });
          case u.ACTION_SET_PRE_ENGAGEMENT_READY:
            return o({}, n, { preEngagementReady: e.preEngagementReady });
          case u.ACTION_SET_AVATAR:
            return o({}, n, { avatars: new Map(n.avatars).set(e.identity, e.avatar) });
          case u.ACTION_SET_WAIT_SET_TIMEOUT:
            return o({}, n, { waitingTimeoutSeconds: e.waitingTimeout });
          default:
            return n;
        }
      };
      var h = (function() {
        function n() {}
        return (
          Object.defineProperty(n, 'dispatcher', {
            get: function() {
              return this._dispatcher || s.CFModule.dispatch;
            },
            set: function(n) {
              this._dispatcher = n;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (n.toggleEntryPoint = function() {
            return this.dispatcher(c.toggleEntryPoint());
          }),
          (n.setTaskSid = function(n) {
            return this.dispatcher(c.setTaskSid(n));
          }),
          (n.setEngagementStage = function(n) {
            return this.dispatcher(c.setEngagementStage(n));
          }),
          (n.setEntryPointExpanded = function(n) {
            return this.dispatcher(c.setEntryPointExpanded(n));
          }),
          (n.setIdentity = function(n) {
            return this.dispatcher(c.setIdentity(n));
          }),
          (n.setChannelSid = function(n) {
            return this.dispatcher(c.setChannelSid(n));
          }),
          (n.setAccessToken = function(n) {
            return this.dispatcher(c.setAccessToken(n));
          }),
          (n.setDisableLocalStorage = function() {
            return this.dispatcher(c.setDisableLocalStorage());
          }),
          (n.setPreEngagementReady = function(n) {
            return this.dispatcher(c.setPreEngagementReady(n));
          }),
          (n.setAvatar = function(n, e) {
            return this.dispatcher(c.setAvatar(n, e));
          }),
          (n.setWaitSetTimeOut = function(n) {
            return this.dispatcher(c.setWaitSetTimeOut(n));
          }),
          (n.initClients = function(n) {
            void 0 === n && (n = void 0);
            var e = s.CFModule.state.session.tokenPayload.token;
            return this.getChatClient(e)
              .then(function(e) {
                return (
                  e.on('tokenAboutToExpire', p.TokenHelper.refreshAccessToken),
                  n && e.user.updateFriendlyName(n),
                  l.Actions.initChatFrame(e),
                  s.CFModule.state.session.channelSid
                );
              })
              .then(function(n) {
                return l.Actions.joinAndInitChannelBySid(n);
              });
          }),
          (n.shutdown = function() {
            s.CFModule.chatClient && (l.Actions.shutdown(), (s.CFModule.chatClient = void 0));
          }),
          (n.entryPointClick = function() {
            return (
              this.toggleEntryPoint(),
              s.CFModule.state.config.preEngagementConfig &&
              s.CFModule.state.config.preEngagementConfig.disabled &&
              s.CFModule.state.session.engagementStage === u.PRE_ENGAGEMENT
                ? this.startEngagement({})
                : Promise.resolve()
            );
          }),
          (n.getChatClient = function(n) {
            return s.CFModule.chatClient && s.CFModule.chatClient.token === n
              ? Promise.resolve(s.CFModule.chatClient)
              : i.Client.create(n)
                  .then(function(n) {
                    return (s.CFModule.chatClient = n), n;
                  })
                  .catch(function(n) {
                    return d.default.error(n), Promise.reject('Expired token.');
                  });
          }),
          (n.getAgentAvatar = function(n) {
            return s.CFModule.state.session.avatars ? s.CFModule.state.session.avatars.get(n) : '';
          }),
          (n.initSession = function() {
            var e = this;
            return s.CFModule.state.config.accountSid
              ? s.CFModule.state.config.flexFlowSid
                ? (s.CFModule.state.config.disableLocalStorage && this.setDisableLocalStorage(),
                  s.CFModule.state.config.available
                    ? s.CFModule.state.session.tokenPayload
                      ? p.TokenHelper.isValidTokenPayload(s.CFModule.state.session.tokenPayload)
                        ? this.getChatClient(s.CFModule.state.session.tokenPayload.token)
                            .then(function(t) {
                              return s.CFModule.state.session.channelSid
                                ? t
                                    .getChannelBySid(s.CFModule.state.session.channelSid)
                                    .then(function(t) {
                                      return t.attributes[
                                        a.FrameConstants.CHANNEL_STATUS_ATTRIBUTE
                                      ] === a.FrameConstants.CHANNEL_STATUS_INACTIVE
                                        ? (n.setChannelSid(void 0),
                                          n.setAccessToken(null),
                                          n.shutdown(),
                                          e.defaultStartup())
                                        : e.initClients().then(function() {
                                            return (
                                              n.setEngagementStage(u.IN_ENGAGEMENT),
                                              n.setEntryPointExpanded(!0),
                                              Promise.resolve()
                                            );
                                          });
                                    })
                                : e.defaultStartup();
                            })
                            .catch(function(n) {
                              return (
                                d.default.error('Error trying to resume chat.', n),
                                Promise.reject(n)
                              );
                            })
                        : (n.setAccessToken(null), this.defaultStartup())
                      : this.defaultStartup()
                    : Promise.resolve())
                : Promise.reject('Missing flexFlowSid in configuration')
              : Promise.reject('Missing accountSid in configuration');
          }),
          (n.defaultStartup = function() {
            return s.CFModule.state.config.startEngagementOnInit
              ? this.startEngagement({}, u.INIT_ENGAGEMENT)
              : (this.setEngagementStage(u.PRE_ENGAGEMENT), Promise.resolve());
          }),
          (n.startEngagement = function(e, t, i) {
            var a = this;
            n.setTaskSid(void 0),
              t ? n.setEngagementStage(t) : n.setEngagementStage(u.WAITING_ENGAGEMENT);
            var c = s.CFModule.state.config.flexWebChannelsUrl,
              l = s.CFModule.state.config.context;
            l.identity = s.CFModule.state.session.identity;
            var g = '';
            return (
              e.hasOwnProperty('friendlyName') && (g = e.friendlyName),
              p.TokenHelper.getAccessToken()
                .then(function(n) {
                  var t = {
                      FlexFlowSid: s.CFModule.state.config.flexFlowSid,
                      Identity: n.identity,
                      ChatFriendlyName: s.CFModule.state.config.chatFriendlyName || 'Flex WebChat',
                      CustomerFriendlyName: g,
                      PreEngagementData: JSON.stringify(o({}, e, l)),
                    },
                    i = f.StateHelper.urlEncodeNestedJson(t);
                  return r.default.post(c, i, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    auth: { username: 'token', password: n.token },
                  });
                })
                .then(function(e) {
                  var t =
                    e.data.chat_channel_sid ||
                    (e.data.channel && e.data.channel.sid) ||
                    e.data.channelSid;
                  if (!t) throw new Error('No chat_channel_sid in response');
                  return (
                    a.setChannelSid(t),
                    n.initClients(g).then(function() {
                      return n.setEngagementStage(u.IN_ENGAGEMENT), t;
                    })
                  );
                })
                .catch(function(n) {
                  return d.default.error(n), n;
                })
            );
          }),
          (n.updateEngagement = function(n, e) {
            if (!s.CFModule.state.config.updateEngagementUrl)
              return d.default.warn('updateEngagementUrl not set'), Promise.resolve();
            var t = s.CFModule.state.config.updateEngagementUrl,
              o = s.CFModule.state.config.context;
            return (
              (o.identity = s.CFModule.state.session.identity),
              (o.channelSid = s.CFModule.state.session.channelSid),
              (o[e] = n),
              r.default
                .put(t, o)
                .then(function(n) {
                  return n.data;
                })
                .catch(function(n) {
                  throw (d.default.error(n), n);
                })
            );
          }),
          (n.cancelTask = function() {
            var e = s.CFModule.state.session.taskSid;
            n.setTaskSid(void 0),
              n.setWaitSetTimeOut(void 0),
              e && r.default.delete(s.CFModule.state.config.cancelEngagementUrl + '/' + e);
          }),
          (n.closeClick = function() {
            n.toggleEntryPoint();
          }),
          n
        );
      })();
      e.Actions = h;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(26),
        r = t(20);
      !(function(n) {
        for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
      })(t(59)),
        (e.default = o.default),
        (e.withTheme = function(n) {
          return r.withTheme(n);
        });
    },
    function(n, e) {
      n.exports = require('react-redux');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ACTION_INIT_SESSION = 'CF_SESSION_INIT'),
        (e.ACTION_SET_IDENTITY = 'CF_SESSION_SET_IDENTITY'),
        (e.ACTION_SET_CHANNEL_SID = 'CF_SESSION_SET_CHANNEL_SID'),
        (e.ACTION_SET_ACCESS_TOKEN = 'CF_SESSION_SET_ACCESS_TOKEN'),
        (e.ACTION_TOGGLE_ENTRY_POINT = 'CF_ACTION_TOGGLE_ENTRY_POINT'),
        (e.ACTION_SET_ENTRY_POINT_EXPANDED = 'CF_SESSION_SET_ENTRY_POINT_EXPANDED'),
        (e.ACTION_SET_ENGAGEMENT_STAGE = 'CF_SESSION_SET_ENGAGEMENT_STAGE'),
        (e.ACTION_SET_TASK_SID = 'CF_SESSION_SET_TASK_SID'),
        (e.ACTION_SET_DISABLE_LOCAL_STORAGE = 'CF_ACTION_SET_DISABLE_LOCAL_STORAGE'),
        (e.ACTION_SET_PRE_ENGAGEMENT_READY = 'CF_ACTION_SET_PRE_ENGAGEMENT_READY'),
        (e.ACTION_SET_AVATAR = 'CF_ACTION_SET_AVATAR'),
        (e.ACTION_SET_WAIT_SET_TIMEOUT = 'CF_ACTION_SET_WAIT_SET_TIMEOUT'),
        (e.INIT_ENGAGEMENT = 'CF_INIT_ENGAGEMENT'),
        (e.PRE_ENGAGEMENT = 'CF_PRE_ENGAGEMENT'),
        (e.POST_ENGAGEMENT = 'CF_POST_ENGAGEMENT'),
        (e.IN_ENGAGEMENT = 'CF_IN_ENGAGEMENT'),
        (e.WAITING_ENGAGEMENT = 'CF_WAITING_ENGAGEMENT'),
        (e.TIMEOUT_ENGAGEMENT = 'CF_TIMEOUT_ENGAGEMENT'),
        (e.CONFIRM_END_ENGAGEMENT = 'CF_CONFIRM_END_ENGAGEMENT');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = function(n) {
          return n.flex;
        },
        r = (function() {
          function n() {}
          return (
            (n.init = function(e, t) {
              void 0 === t && (t = o), (n._stateCallback = t), (n._store = e);
            }),
            Object.defineProperty(n, 'state', {
              get: function() {
                if (!n._stateCallback) throw new Error('CFModule not initialized');
                return n._stateCallback(n._store.getState());
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.dispatch = function(e) {
              if (!n._store) throw new Error('CFModule not initialized');
              return n._store.dispatch(e);
            }),
            Object.defineProperty(n, 'chatClient', {
              get: function() {
                return this._chatClient;
              },
              set: function(n) {
                this._chatClient = n;
              },
              enumerable: !0,
              configurable: !0,
            }),
            n
          );
        })();
      e.CFModule = r;
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(0),
        i = t(0),
        a = t(7),
        s = t(10),
        c = t(3),
        u = t(8),
        l = t(2),
        f = (function() {
          function n() {}
          return (
            (n.init = function(n) {
              n.addListener('channelJoined', this.onChannelJoined);
            }),
            (n.initChatFrame = function(n) {
              i.ChatSessionState.Actions.init(n), this.init(n);
            }),
            (n.shutdown = function() {
              a.CFModule.chatClient &&
                (a.CFModule.chatClient.removeAllListeners(), i.ChatSessionState.Actions.shutdown());
            }),
            (n.joinAndInitChannelBySid = function(n) {
              var e = this;
              return n
                ? a.CFModule.chatClient.getChannelBySid(n).then(function(n) {
                    return e.joinAndInitChannel(n);
                  })
                : Promise.reject('No chat channel sid in joinAndInitChannelBySid');
            }),
            (n.joinAndInitChannel = function(n) {
              'joined' !== n.status && n.join(),
                i.ChatModule.state.channels[n.sid] || i.ChatChannelState.Actions.init(n),
                this.setupChannelListeners(n),
                this.setAvatars(n),
                this.setEngagementStage(n);
            }),
            (n.endChat = function() {
              var n,
                e = a.CFModule.state.session.channelSid;
              if (e && i.ChatModule.state.channels[e]) {
                var t = i.ChatModule.state.channels[e];
                return t.source
                  .updateAttributes(
                    o(
                      {},
                      t.source.attributes,
                      ((n = {}),
                      (n[r.FrameConstants.CHANNEL_STATUS_ATTRIBUTE] =
                        r.FrameConstants.CHANNEL_STATUS_INACTIVE),
                      n)
                    )
                  )
                  .then(function() {
                    if (!a.CFModule.state.config.postEngagementConfig)
                      return c.Actions.setEntryPointExpanded(!1), u.Actions.leaveChat();
                  });
              }
            }),
            (n.leaveChat = function() {
              var n = a.CFModule.state.session.channelSid,
                e = function() {
                  c.Actions.setChannelSid(null),
                    c.Actions.setAccessToken(null),
                    c.Actions.shutdown(),
                    c.Actions.setEngagementStage(s.PRE_ENGAGEMENT);
                };
              if (!n || !i.ChatModule.state.channels[n]) return e();
              i.ChatModule.state.channels[n];
              i.ChatChannelState.Actions.unload(n), e();
            }),
            (n.setupChannelListeners = function(n) {
              var e = this;
              n.on('updated', function() {
                return e.setEngagementStage(n);
              });
            }),
            (n.setEngagementStage = function(n) {
              n.attributes &&
                (n.attributes[r.FrameConstants.CHANNEL_STATUS_ATTRIBUTE] ===
                  r.FrameConstants.CHANNEL_STATUS_INACTIVE &&
                  (l.default.info('channel set to inactive'),
                  a.CFModule.state.config.postEngagementConfig &&
                    a.CFModule.state.session.engagementStage !== s.PRE_ENGAGEMENT &&
                    c.Actions.setEngagementStage(s.POST_ENGAGEMENT)));
            }),
            (n.unloadChatBySid = function(n) {
              i.ChatChannelState.Actions.unload(n);
            }),
            (n.setAvatars = function(n) {
              n.getUserDescriptors().then(function(n) {
                n.items.forEach(function(n) {
                  var e = n.attributes.avatar;
                  e && c.Actions.setAvatar(n.identity, e);
                });
              });
            }),
            (n.getAvatarFromChannelUser = function(n, e) {
              return a.CFModule.chatClient
                .getChannelBySid(n)
                .then(function(n) {
                  return n.getUserDescriptors();
                })
                .then(function(n) {
                  if (n && 0 !== n.items.length) {
                    var t = n.items.filter(function(n, t) {
                      return n.identity == e;
                    });
                    return 0 === t.length ? null : t[0].attributes.avatar;
                  }
                  return null;
                });
            }),
            (n.onChannelJoined = function(e) {
              return n.joinAndInitChannel(e);
            }),
            n
          );
        })();
      e.Actions = f;
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(0),
        i = r.BaseTheme.colors;
      e.createTheme = function(n, e) {
        var t = r.createTheme(n, e),
          i = e ? n.darkTextColor : n.lightTextColor;
        return o({}, t, {
          colors: n,
          MainContainer: {},
          EntryPoint: { Container: { background: n.defaultButtonColor, color: '#ffffff' } },
          MainHeader: {
            Container: { background: n.base1, color: i, borderColor: n.base4 },
            Logo: { fill: e ? '#000000' : '#ffffff' },
          },
          PreEngagementCanvas: {
            Container: { background: n.base2, color: i },
            Form: { SubmitButton: { background: n.defaultButtonColor, color: '#ffffff' } },
          },
          PostEngagementCanvas: {
            Container: { background: n.base2, color: i },
            DynamicForm: {
              SubmitButton: { background: n.defaultButtonColor, color: '#ffffff' },
              ThumbsUpOrDown: { background: n.base2, color: i, border: 'solid 1px ' + n.base4 },
              ThumbsUpOrDownSelected: {
                background: n.base2,
                color: i,
                border: 'solid 1px ' + n.base4,
              },
              TextArea: { border: 'solid 1px ' + n.base4 },
              Placeholder: { color: n.base3 },
            },
          },
          PendingEngagementCanvas: {
            Container: { background: n.base2, color: i },
            CancelButton: { background: n.defaultButtonColor, color: n.lightTextColor },
          },
          TimeoutEngagementCanvas: { Container: { background: n.base2, color: i } },
          Modal: {
            Container: { background: n.base2, color: i },
            Title: { color: i },
            PrimaryButton: { background: n.base2, color: i },
            SecondaryButton: { background: n.base2, color: i },
          },
        });
      };
      var a = { colors: i, lightTheme: !0 };
      e.default = a;
    },
    function(n, e, t) {
      'use strict';
      function o(n) {
        for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), o(t(6)), o(t(11));
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ACTION_INIT_CONFIG = 'CF_INIT_CONFIG'),
        (e.CUSTOMER_FRAME_CONTAINER_ID = 'twilio-customer-frame');
    },
    function(n, e) {
      n.exports = require('axios');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(44),
        r = t(45),
        i = t(46),
        a = t(47),
        s = (function() {
          function n() {}
          return (
            (n.getPredefinedTheme = function(n) {
              var e = {
                DarkTheme: r.default,
                MediumTheme: o.default,
                BlueDarkTheme: i.default,
                BlueMediumTheme: a.default,
              }[n];
              return e || (e = o.default), e;
            }),
            n
          );
        })();
      e.ThemeDefCreator = s;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(12),
        r = t(7),
        i = t(53),
        a = t(11),
        s = t(0),
        c = t(2);
      (e.reduce = function(n, e) {
        switch ((void 0 === n && (n = {}), e.type)) {
          case a.ACTION_INIT_CONFIG:
            return e.config;
          default:
            return n;
        }
      }),
        (e.current = function() {
          return r.CFModule.state.config;
        }),
        (e.tryGet = function(n) {
          try {
            return n();
          } catch (n) {
            return;
          }
        });
      var u = (function() {
        function n() {}
        return (
          (n.initConfig = function(n) {
            r.CFModule.dispatch(i.initConfig(n)),
              n.logLevel && c.default.setLevel(n.logLevel),
              s.ChatConfig.setConfig({ language: n.language, logLevel: n.logLevel });
          }),
          (n.getConfigFromContextApi = function(n, e) {
            return n ? this.fetchConfig(e, n) : Promise.resolve({});
          }),
          (n.fetchConfig = function(n, e) {
            var t = {};
            return (
              (t = e.endsWith('.json')
                ? { method: 'GET', url: e, params: n }
                : { method: 'POST', url: e, data: n }),
              o.default.request(t).then(function(n) {
                return n.data;
              })
            );
          }),
          n
        );
      })();
      e.Actions = u;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(55),
        r = t(56);
      e.Strings = r.Strings;
      var i = { default: o.default };
      e.languages = i;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(0);
      (e.Template = o.Template), (e.CompiledTemplate = o.CompiledTemplate);
      var r = o.templates;
      e.templates = r;
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__makeTemplateObject) ||
        function(n, e) {
          return (
            Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
          );
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(1),
        i = t(39),
        a = t(10),
        s = t(3),
        c = t(18),
        u = t(23),
        l = t(25),
        f = t(26),
        p = (function() {
          function n(n) {
            this._manager = n;
          }
          return (
            (n.create = function(e) {
              return u.Manager.create(e).then(function(e) {
                return new n(e).init();
              });
            }),
            Object.defineProperty(n.prototype, 'manager', {
              get: function() {
                return this._manager;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.init = function() {
              this.createFrameDiv(a.CUSTOMER_FRAME_CONTAINER_ID);
              var n = document.querySelector('#' + a.CUSTOMER_FRAME_CONTAINER_ID);
              if (!n)
                throw new Error(
                  'Unable to find container for selector: ' + a.CUSTOMER_FRAME_CONTAINER_ID
                );
              return (
                i.unmountComponentAtNode(n),
                i.render(
                  r.createElement(
                    g,
                    { className: 'Twilio Twilio-FlexWebChat' },
                    r.createElement(
                      c.ContextProvider,
                      { manager: this.manager },
                      r.createElement(l.RootContainer, null)
                    )
                  ),
                  n
                ),
                this
              );
            }),
            (n.prototype.configure = function(n) {
              this.manager.configuration = n;
            }),
            (n.prototype.createFrameDiv = function(n) {
              if (!document.getElementById(n)) {
                var e = document.createElement('div');
                (e.id = n), document.body.appendChild(e);
              }
            }),
            (n.prototype.setStage = function(n) {
              s.Actions.setEngagementStage(n);
            }),
            n
          );
        })();
      e.FlexWebChat = p;
      var d,
        g = f.default('div')(
          d || (d = o(['\n    font-family: "Open Sans";\n'], ['\n    font-family: "Open Sans";\n']))
        );
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function() {
          var n = function(e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(n, e) {
                  n.__proto__ = e;
                }) ||
              function(n, e) {
                for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
              })(e, t);
          };
          return function(e, t) {
            function o() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(1),
        i = t(5),
        a = t(19),
        s = t(21),
        c = t(2);
      e.AppContext = r.createContext(void 0);
      var u = function(n) {
          return n.store === s.getDefaultStore()
            ? r.createElement(i.Provider, { store: n.store }, n.children)
            : n.children;
        },
        l = (function(n) {
          function t() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          return (
            o(t, n),
            (t.prototype.componentWillMount = function() {
              this.props.manager
                ? this.props.manager.loadInitialData().then(function() {
                    return c.default.info('All data has been loaded...');
                  })
                : c.default.error('manager missing in the props of ContextProvider');
            }),
            (t.prototype.render = function() {
              var n = this.props.manager;
              return r.createElement(
                e.AppContext.Provider,
                { value: this.props },
                r.createElement(
                  u,
                  { store: n.store },
                  r.createElement(a.ThemeProvider, null, this.props.children)
                )
              );
            }),
            t
          );
        })(r.PureComponent);
      e.ContextProvider = l;
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }).apply(this, arguments);
          },
        i =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = t(1),
        s = t(5),
        c = t(20),
        u = t(0),
        l = t(13),
        f = t(48),
        p = t(9),
        d = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          var t;
          return (
            o(e, n),
            (t = e),
            (e.prototype.render = function() {
              var n,
                e = this.props.themeConf,
                o = l.ThemeDefCreator.getPredefinedTheme(this.props.themeConf.baseName);
              e.colors && (o.colors = r({}, o.colors, e.colors)),
                e.hasOwnProperty('light') && (o.lightTheme = e.light),
                (n = p.createTheme(o.colors, o.lightTheme));
              var i = t.getMergedTheme(n, this.props.themeConf.overrides);
              i.name = this.props.themeConf.baseName;
              var s = f.createMuiTheme(i);
              return a.createElement(
                f.MuiThemeProvider,
                { theme: s },
                a.createElement(c.ThemeProvider, { theme: i }, this.props.children)
              );
            }),
            (e.getMergedTheme = function(n, e) {
              return e ? u.Utils.merge(n, e) : n;
            }),
            (e = t = i(
              [
                s.connect(function(n) {
                  return { themeConf: n.flex.config.colorTheme };
                }),
              ],
              e
            ))
          );
        })(a.PureComponent);
      e.ThemeProvider = d;
    },
    function(n, e) {
      n.exports = require('emotion-theming');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o,
        r = t(22),
        i = t(49),
        a = t(50),
        s = t(51),
        c = t(52),
        u = t(54),
        l = t(6),
        f = t(2),
        p = 1;
      (e.getDefaultStore = function() {
        return o;
      }),
        (e.createDefaultStore = function() {
          if (o) return f.default.error('default store already exists'), null;
          var n = [a.default()];
          f.default.getLevel() <= p && n.push(i.createLogger());
          var e = r.applyMiddleware.apply(void 0, n),
            t = r.combineReducers({ flex: c.CFReducer }),
            d = u.loadState();
          return (
            d &&
              d.flex &&
              ((d.flex.session.isEntryPointExpanded = !1),
              (d.flex.session.engagementStage = l.INIT_ENGAGEMENT),
              (d.flex.session.avatars = void 0),
              (d.flex.session.taskSid = void 0),
              (d.flex.session.waitingTimeoutSeconds = void 0)),
            d && d.flex && d.flex.session.ignorePersisted && (d = {}),
            (o = r.createStore(t, d, e)).subscribe(
              s(function() {
                u.saveState({ flex: { session: o.getState().flex.session } });
              }, 1e3)
            ),
            o
          );
        });
    },
    function(n, e) {
      n.exports = require('redux');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(0),
        r = t(21),
        i = t(14),
        a = t(3),
        s = t(10),
        c = t(7),
        u = t(0),
        l = t(15),
        f = t(57),
        p = t(58);
      e.defaultConfiguration = p.default;
      var d = t(24),
        g = t(2),
        h = t(65),
        m = function(n) {
          return n.flex.chat;
        },
        y = (function() {
          function n(n, e) {
            (this._initialized = !1),
              (this._store = e),
              this.configureReduxStore(),
              (this.configuration = n),
              o.registerGlobalStyles();
          }
          return (
            (n.validateConfig = function(n) {
              'string' == typeof n.colorTheme && (n.colorTheme = { baseName: n.colorTheme });
            }),
            (n.create = function(e, t) {
              var a;
              return (
                g.default.info(
                  'Creating manager. flex-ui version:',
                  h.VERSION,
                  'frame-ui version:',
                  o.VERSION
                ),
                t || (t = r.createDefaultStore()),
                o
                  .initialize()
                  .then(function() {
                    a = new n(e, t);
                    var r = f.getPageContext();
                    return (
                      (a.configuration.context = r),
                      (a.configuration = o.Utils.merge(a.configuration, e)),
                      i.Actions.getConfigFromContextApi(e.configurationUrl, a.configuration.context)
                    );
                  })
                  .then(function(n) {
                    return (a.configuration = o.Utils.merge(a.configuration, n)), a;
                  })
              );
            }),
            Object.defineProperty(n.prototype, 'configuration', {
              get: function() {
                return c.CFModule.state.config;
              },
              set: function(e) {
                n.validateConfig(e),
                  n.validateConfig(p.default),
                  (e = o.Utils.merge(p.default, e)),
                  this.setStringsFromConfig(e),
                  e.componentProps && o.Utils.updateDefaultProps(d, e.componentProps),
                  i.Actions.initConfig(e);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, 'store', {
              get: function() {
                return this._store;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, 'strings', {
              get: function() {
                if (!this._strings) throw new Error('Strings not set');
                return this._strings;
              },
              set: function(n) {
                (this._strings = n), this._initialized && o.initWithStrings(n);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, 'chatClient', {
              get: function() {
                return c.CFModule.chatClient;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.loadInitialData = function() {
              return (
                o.initWithStrings(this.strings),
                (this._initialized = !0),
                a.Actions.setEngagementStage(s.PRE_ENGAGEMENT),
                this.initSession()
              );
            }),
            (n.prototype.configureReduxStore = function() {
              c.CFModule.init(this.store), u.ChatModule.init(this.store, m);
            }),
            (n.prototype.setStringsFromConfig = function(n) {
              if (this.configuration.language != n.language) {
                var e = n.language || 'default',
                  t = l.languages[e] || l.languages.default;
                this.strings = t;
              }
            }),
            (n.prototype.initSession = function() {
              return a.Actions.initSession();
            }),
            n
          );
        })();
      e.Manager = y;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(25);
      e.RootContainer = o.RootContainer;
      var r = t(27);
      e.EntryPoint = r.EntryPoint;
      var i = t(28);
      e.MainContainer = i.MainContainer;
      var a = t(29);
      e.MainHeader = a.MainHeader;
      var s = t(30);
      e.PreEngagementCanvas = s.PreEngagementCanvas;
      var c = t(31);
      e.PendingEngagementCanvas = c.PendingEngagementCanvas;
      var u = t(4);
      (e.Theme = u.Theme),
        (function(n) {
          for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
        })(t(0));
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        i =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = t(1),
        s = t(5),
        c = t(0),
        u = t(6),
        l = t(4),
        f = t(27),
        p = t(28),
        d = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          var t;
          return (
            o(e, n),
            (t = e),
            (e.prototype.render = function() {
              return a.createElement(
                c.DynamicComponent,
                {
                  name: t.friendlyName,
                  contentStore: t.Content,
                  childProps: this.props,
                  customChildren: this.props.children,
                },
                a.createElement(
                  h,
                  { className: 'Twilio-RootContainer' },
                  this.props.isEntryPointExpanded &&
                    this.props.engagementStage !== u.INIT_ENGAGEMENT &&
                    a.createElement(p.MainContainer, { key: 'main' }),
                  this.props.config.available &&
                    this.props.engagementStage !== u.INIT_ENGAGEMENT &&
                    a.createElement(f.EntryPoint, { key: 'entrypoint' })
                )
              );
            }),
            (e.friendlyName = 'RootContainer'),
            (e.displayName = t.friendlyName),
            (e.Content = new c.DynamicContentStore(t.friendlyName)),
            (e = t = i(
              [
                l.withTheme,
                s.connect(function(n) {
                  return {
                    identity: n.flex.session.identity,
                    isEntryPointExpanded: n.flex.session.isEntryPointExpanded,
                    channelSid: n.flex.session.channelSid,
                    config: n.flex.config,
                    engagementStage: n.flex.session.engagementStage,
                    canvasBottom: n.flex.config.canvasBottom,
                    session: n.flex.session,
                  };
                }),
              ],
              e
            ))
          );
        })(a.PureComponent);
      e.RootContainer = d;
      var g,
        h = l.default('div')(g || (g = r(['\n'], ['\n'])));
    },
    function(n, e) {
      n.exports = require('react-emotion');
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }).apply(this, arguments);
          },
        a =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var s = t(1),
        c = t(5),
        u = t(0),
        l = t(0),
        f = t(4),
        p = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          var t;
          return (
            o(e, n),
            (t = e),
            (e.updateAll = function() {}),
            (e.prototype.render = function() {
              return s.createElement(m, i({}, this.props));
            }),
            (e.displayName = 'EntryPoint'),
            (e.Content = new u.DynamicContentStore(t.displayName)),
            (e.defaultProps = {
              tagline: 'Chat with us',
              icon: 'MessageBold',
              bottom: '15px',
              right: '20px',
              color: '#FFFFFF',
              background: '#f22f46',
              entryPointStyle: void 0,
              entryPointBorderStyle: void 0,
              entryPointClassName: void 0,
              widgetClassName: void 0,
              entryPointSize: void 0,
              entryPointLocation: void 0,
            }),
            (e = t = a([u.withDefaultPropsUpdate], e))
          );
        })(s.PureComponent);
      e.EntryPoint = p;
      var d,
        g,
        h,
        m = (function(n) {
          function e() {
            var e = (null !== n && n.apply(this, arguments)) || this;
            return (
              (e.handleEntryPointClick = function(n) {
                n.preventDefault(), l.Actions.invokeAction('ToggleChatVisibility');
              }),
              e
            );
          }
          return (
            o(e, n),
            (e.prototype.render = function() {
              return s.createElement(
                u.DynamicComponent,
                {
                  contentStore: p.Content,
                  childProps: this.props,
                  name: p.displayName,
                  customChildren: this.props.children,
                },
                s.createElement(
                  y,
                  {
                    className: 'Twilio-EntryPoint',
                    isEntryPointExpanded: this.props.session.isEntryPointExpanded,
                    rounded: 'Rounded' === this.props.entryPointBorderStyle,
                    hasTagline: !!this.props.tagline,
                    bottom: this.props.bottom,
                    right: this.props.right,
                    onClick: this.handleEntryPointClick,
                  },
                  s.createElement(
                    E,
                    {
                      key: 'tagline',
                      className: 'Twilio-EntryPoint-Tagline',
                      isEntryPointExpanded: this.props.session.isEntryPointExpanded,
                    },
                    this.props.session.isEntryPointExpanded ? '' : this.props.tagline
                  ),
                  s.createElement(
                    _,
                    { key: 'icon', isEntryPointExpanded: this.props.session.isEntryPointExpanded },
                    s.createElement(l.Icon, {
                      icon: this.props.session.isEntryPointExpanded
                        ? 'MessageBold'
                        : this.props.icon,
                    })
                  )
                )
              );
            }),
            (e = a(
              [
                f.withTheme,
                c.connect(function(n) {
                  return { session: n.flex.session };
                }),
              ],
              e
            ))
          );
        })(s.PureComponent),
        y = f.default('div')(
          d ||
            (d = r(
              [
                '\n    display: flex;\n    white-space: nowrap;\n    z-index: 100;\n    cursor: pointer;\n    max-width: ',
                ';\n    position: fixed !important;\n    bottom: ',
                ';\n    right: ',
                ';\n    align-items: center;\n    transition: max-width 200ms;\n\n    ',
                ';\n\n    border-radius: ',
                ';\n    height: 33px;\n    box-shadow: ',
                ';\n\n    .Icon-close {\n        width: inherit;\n    }\n\n',
              ],
              [
                '\n    display: flex;\n    white-space: nowrap;\n    z-index: 100;\n    cursor: pointer;\n    max-width: ',
                ';\n    position: fixed !important;\n    bottom: ',
                ';\n    right: ',
                ';\n    align-items: center;\n    transition: max-width 200ms;\n\n    ',
                ';\n\n    border-radius: ',
                ';\n    height: 33px;\n    box-shadow: ',
                ';\n\n    .Icon-close {\n        width: inherit;\n    }\n\n',
              ]
            )),
          function(n) {
            return n.isEntryPointExpanded ? '44px' : '400px';
          },
          function(n) {
            return n.bottom || '10px';
          },
          function(n) {
            return n.right || '20px';
          },
          function(n) {
            return n.theme.EntryPoint.Container;
          },
          function(n) {
            return n.rounded ? (n.hasTagline ? '3px' : '18px') : '0px';
          },
          function(n) {
            return n.rounded && n.hasTagline, '0 2px 4px 0 rgba(0, 0, 0, 0.5)';
          }
        ),
        E = f.default('div')(
          g ||
            (g = r(
              [
                '\n    font-size: 10px;\n    font-weight: bold;\n    letter-spacing: 2px;\n    overflow:hidden;\n    margin: auto;\n    margin-left: ',
                ';\n    text-transform: uppercase;\n',
              ],
              [
                '\n    font-size: 10px;\n    font-weight: bold;\n    letter-spacing: 2px;\n    overflow:hidden;\n    margin: auto;\n    margin-left: ',
                ';\n    text-transform: uppercase;\n',
              ]
            )),
          function(n) {
            return n.isEntryPointExpanded ? '17px' : '15px';
          }
        ),
        _ = f.default('div')(
          h ||
            (h = r(
              ['\n    margin: 4px;\n    margin-left: ', ';\n'],
              ['\n    margin: 4px;\n    margin-left: ', ';\n']
            )),
          function(n) {
            return n.isEntryPointExpanded ? '-12px' : '4px';
          }
        );
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }).apply(this, arguments);
          },
        a =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var s = t(1),
        c = t(5),
        u = t(0),
        l = t(6),
        f = t(29),
        p = t(30),
        d = t(31),
        g = t(61),
        h = t(62),
        m = t(63),
        y = t(4),
        E = t(64),
        _ = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          var t;
          return (
            o(e, n),
            (t = e),
            (e.updateAll = function() {}),
            (e.prototype.render = function() {
              return s.createElement(x, i({}, this.props));
            }),
            (e.displayName = 'MainContainer'),
            (e.Content = new u.DynamicContentStore(t.displayName)),
            (e.defaultProps = { height: '504px', width: '276px', bottom: '74px', right: '20px' }),
            (e = t = a([u.withDefaultPropsUpdate], e))
          );
        })(s.PureComponent);
      e.MainContainer = _;
      var C,
        x = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          return (
            o(e, n),
            (e.prototype.render = function() {
              return s.createElement(
                E.default,
                { bounds: 'body', handle: '.Twilio-MainHeader' },
                s.createElement(
                  u.DynamicComponent,
                  {
                    name: _.displayName,
                    contentStore: _.Content,
                    childProps: this.props,
                    customChildren: this.props.children,
                    vertical: !0,
                  },
                  s.createElement(
                    v,
                    i({ className: 'Twilio-MainContainer' }, this.props),
                    s.createElement(f.MainHeader, { key: 'header' }),
                    this.renderEngagementStage()
                  )
                )
              );
            }),
            (e.prototype.renderEngagementStage = function() {
              switch (this.props.engagementStage) {
                case l.PRE_ENGAGEMENT:
                  return s.createElement(p.PreEngagementCanvas, { key: 'pre-engagement' });
                case l.WAITING_ENGAGEMENT:
                  return s.createElement(d.PendingEngagementCanvas, { key: 'pending-engagement' });
                case l.IN_ENGAGEMENT:
                  return s.createElement(u.MessagingCanvas, {
                    key: 'in-engagement',
                    sid: this.props.channelSid,
                  });
                case l.CONFIRM_END_ENGAGEMENT:
                  return s.createElement(h.ConfirmEndEngagementCanvas, {
                    key: 'confirm-end-engagement',
                  });
                case l.POST_ENGAGEMENT:
                  return s.createElement(m.PostEngagementCanvas, { key: 'post-engagement' });
                case l.TIMEOUT_ENGAGEMENT:
                  return s.createElement(g.TimeoutEngagementCanvas, { key: 'timeout-engagement' });
              }
            }),
            (e = a(
              [
                y.withTheme,
                c.connect(function(n) {
                  return {
                    engagementStage: n.flex.session.engagementStage,
                    channelSid: n.flex.session.channelSid,
                  };
                }),
              ],
              e
            ))
          );
        })(s.PureComponent),
        v = y.default('div')(
          C ||
            (C = r(
              [
                '\n\n    display: flex;\n    flex: 1 1 auto;\n    flex-flow: column;\n    position: fixed !important;\n    max-height: 100%;\n    max-width: 100%;\n    height: ',
                ';\n    width: ',
                ';\n    overflow: auto;\n    bottom: ',
                ';\n    right: ',
                ';\n    z-index: 100;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);\n\n    button.form {\n        background: #444444;\n        color: white;\n        border: 0;\n        box-shadow: none;\n        height: 28px;\n        border-radius: 0px;\n        padding: 6px 0px 5px 0px;\n        width: 60px;\n        font-weight: 600;\n    }\n',
              ],
              [
                '\n\n    display: flex;\n    flex: 1 1 auto;\n    flex-flow: column;\n    position: fixed !important;\n    max-height: 100%;\n    max-width: 100%;\n    height: ',
                ';\n    width: ',
                ';\n    overflow: auto;\n    bottom: ',
                ';\n    right: ',
                ';\n    z-index: 100;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);\n\n    button.form {\n        background: #444444;\n        color: white;\n        border: 0;\n        box-shadow: none;\n        height: 28px;\n        border-radius: 0px;\n        padding: 6px 0px 5px 0px;\n        width: 60px;\n        font-weight: 600;\n    }\n',
              ]
            )),
          function(n) {
            return n.height;
          },
          function(n) {
            return n.width;
          },
          function(n) {
            return n.bottom;
          },
          function(n) {
            return n.right;
          }
        );
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }).apply(this, arguments);
          },
        a =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var s = t(1),
        c = t(0),
        u = t(0),
        l = t(4),
        f = t(60),
        p = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          var t;
          return (
            o(e, n),
            (t = e),
            (e.updateAll = function() {}),
            (e.prototype.render = function() {
              return s.createElement(d, i({}, this.props));
            }),
            (e.displayName = 'MainHeader'),
            (e.Content = new c.DynamicContentStore(t.displayName)),
            (e.defaultProps = {
              titleText: 'Chat with Us',
              imageUrl: void 0,
              showImage: !0,
              showTitle: !0,
              closeCallback: function() {
                c.Actions.invokeAction('MinimizeChat');
              },
            }),
            (e = t = a([c.withDefaultPropsUpdate], e))
          );
        })(s.PureComponent);
      e.MainHeader = p;
      var d = (function(n) {
        function t() {
          var e = (null !== n && n.apply(this, arguments)) || this;
          return (
            (e.closeClick = function() {
              var n = e.props.closeCallback;
              n && n();
            }),
            e
          );
        }
        return (
          o(t, n),
          (t.prototype.getLogo = function(n) {
            return n
              ? s.createElement(x, { key: 'logo', src: n })
              : s.createElement(v, { key: 'logo' });
          }),
          (t.prototype.render = function() {
            var n = this.props,
              t = n.showImage,
              o = n.showTitle,
              r = n.imageUrl,
              i = n.titleText;
            return t || o
              ? s.createElement(
                  c.DynamicComponent,
                  {
                    contentStore: p.Content,
                    childProps: this.props,
                    name: p.displayName,
                    customChildren: this.props.children,
                  },
                  s.createElement(
                    e.Container,
                    { className: 'Twilio-MainHeader' },
                    s.createElement(
                      u.ContentFragment,
                      { align: 'start' },
                      t && this.getLogo(r),
                      o && s.createElement(b, { key: 'text' }, s.createElement(T, null, i))
                    ),
                    s.createElement(
                      u.ContentFragment,
                      { align: 'end' },
                      s.createElement(
                        P,
                        { key: 'close-button', onClick: this.closeClick },
                        s.createElement(u.Icon, { icon: 'Close' })
                      )
                    )
                  )
                )
              : s.createElement('div', null);
          }),
          (t = a([l.withTheme], t))
        );
      })(s.PureComponent);
      e.Container = l.default('div')(
        g ||
          (g = r(
            [
              '\n    height: 44px;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: space-between;\n    flex: 0 0 auto;\n    align-items: center;\n    cursor: move;\n    border-style: solid;\n    border-width: 0px 0px 1px 0px;\n    ',
              '\n\n    .Icon-avatar {\n        margin-left: 14px;\n    }\n\n',
            ],
            [
              '\n    height: 44px;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: space-between;\n    flex: 0 0 auto;\n    align-items: center;\n    cursor: move;\n    border-style: solid;\n    border-width: 0px 0px 1px 0px;\n    ',
              '\n\n    .Icon-avatar {\n        margin-left: 14px;\n    }\n\n',
            ]
          )),
        function(n) {
          return n.theme.MainHeader.Container;
        }
      );
      var g,
        h,
        m,
        y,
        E,
        _,
        C,
        x = l.default('img')(
          h ||
            (h = r(
              [
                '\n    margin-left: 10px;\n    margin-top: auto;\n    margin-bottom: auto;\n    display: block;\n    max-width: ',
                ';\n    max-height: 36px;\n    width: auto;\n    height: auto;\n',
              ],
              [
                '\n    margin-left: 10px;\n    margin-top: auto;\n    margin-bottom: auto;\n    display: block;\n    max-width: ',
                ';\n    max-height: 36px;\n    width: auto;\n    height: auto;\n',
              ]
            )),
          function(n) {
            return n.wide ? '240px' : '120px';
          }
        ),
        v = l.default(f.FlexLogo)(
          m || (m = r(['\n    margin-left: 10px;\n'], ['\n    margin-left: 10px;\n']))
        ),
        b = (l.default(u.Icon)(
          y || (y = r(['\n    margin-left: 10px;\n'], ['\n    margin-left: 10px;\n']))
        ),
        l.default('div')(
          E ||
            (E = r(
              [
                '\n    display: flex;\n    margin-left: 17px;\n    flex: 0 1 auto;\n    justify-content: center;\n',
              ],
              [
                '\n    display: flex;\n    margin-left: 17px;\n    flex: 0 1 auto;\n    justify-content: center;\n',
              ]
            ))
        )),
        T = l.default('div')(
          _ ||
            (_ = r(
              [
                '\n    margin: auto;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 12px;\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: left;\n    color: ',
                ';\n',
              ],
              [
                '\n    margin: auto;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 12px;\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: left;\n    color: ',
                ';\n',
              ]
            )),
          function(n) {
            return n.theme.MainHeader.Container.color;
          }
        ),
        P = l.default('div')(
          C ||
            (C = r(
              ['\n    margin-left: auto;\n    cursor: pointer;\n'],
              ['\n    margin-left: auto;\n    cursor: pointer;\n']
            ))
        );
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        i =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = t(1),
        s = t(5),
        c = t(0),
        u = t(0),
        l = t(3),
        f = t(4),
        p = t(16),
        d = (function(n) {
          function e() {
            var e = (null !== n && n.apply(this, arguments)) || this;
            return (
              (e.startEngagement = function(n, e) {
                c.Actions.invokeAction('StartEngagement', { formData: n });
              }),
              e
            );
          }
          var t;
          return (
            o(e, n),
            (t = e),
            (e.prototype.componentDidMount = function() {
              l.Actions.setPreEngagementReady(!0);
            }),
            (e.prototype.render = function() {
              return a.createElement(
                c.DynamicComponent,
                {
                  contentStore: t.Content,
                  childProps: this.props,
                  name: t.friendlyName,
                  customChildren: this.props.children,
                },
                a.createElement(
                  m,
                  { className: 'Twilio-PreEngagementCanvas' },
                  a.createElement(u.DynamicForm, {
                    key: 'form',
                    submitFormCallback: this.startEngagement,
                    formAttributes: this.props.preEngagementConfig,
                  }),
                  a.createElement(
                    y,
                    { key: 'mandatory' },
                    a.createElement(p.Template, {
                      source: p.templates.PreEngagementMandatoryFieldMessage,
                    })
                  )
                )
              );
            }),
            (e.friendlyName = 'PreEngagementCanvas'),
            (e.displayName = t.friendlyName),
            (e.Content = new c.DynamicContentStore(t.friendlyName)),
            (e = t = i(
              [
                f.withTheme,
                s.connect(function(n) {
                  return { preEngagementConfig: n.flex.config.preEngagementConfig };
                }),
              ],
              e
            ))
          );
        })(a.PureComponent);
      e.PreEngagementCanvas = d;
      var g,
        h,
        m = f.default('div')(
          g ||
            (g = r(
              [
                '\n    flex: 1;\n    display: flex;\n    flex-flow: column;\n\n    margin: auto;\n\n    ',
                '\n\n    .Twilio-DynamicForm {\n        ',
                '\n\n        padding: 20px 12px 10px 12px;\n\n        button {\n            ',
                ';\n            margin-top: 30px;\n            margin-left: auto;\n            border-radius: 0;\n        }\n\n        label {\n            display: inline-block;\n            text-transform: uppercase;\n            margin-bottom: 10px;\n        }\n\n        .Twilio-ThumbsUpThumbsDown {\n            background: ',
                ';\n            color: ',
                ';\n        }\n\n        textarea {\n            width: 94%;\n            padding: 6px;\n        }\n    }\n\n\n',
              ],
              [
                '\n    flex: 1;\n    display: flex;\n    flex-flow: column;\n\n    margin: auto;\n\n    ',
                '\n\n    .Twilio-DynamicForm {\n        ',
                '\n\n        padding: 20px 12px 10px 12px;\n\n        button {\n            ',
                ';\n            margin-top: 30px;\n            margin-left: auto;\n            border-radius: 0;\n        }\n\n        label {\n            display: inline-block;\n            text-transform: uppercase;\n            margin-bottom: 10px;\n        }\n\n        .Twilio-ThumbsUpThumbsDown {\n            background: ',
                ';\n            color: ',
                ';\n        }\n\n        textarea {\n            width: 94%;\n            padding: 6px;\n        }\n    }\n\n\n',
              ]
            )),
          function(n) {
            return n.theme.PreEngagementCanvas.Container;
          },
          function(n) {
            return n.theme.PreEngagementCanvas.Container;
          },
          function(n) {
            return n.theme.PreEngagementCanvas.Form.SubmitButton;
          },
          function(n) {
            return n.theme.PreEngagementCanvas.Container.background;
          },
          function(n) {
            return n.theme.PreEngagementCanvas.Container.color;
          }
        ),
        y = f.default('div')(
          h ||
            (h = r(
              [
                '\n    bottom: 12px;\n    left: 12px;\n    position: absolute;\n    font-size: 10px;\n    color: ',
                ';\n',
              ],
              [
                '\n    bottom: 12px;\n    left: 12px;\n    position: absolute;\n    font-size: 10px;\n    color: ',
                ';\n',
              ]
            )),
          function(n) {
            return n.theme.PreEngagementCanvas.Container.color;
          }
        );
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        i =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = t(1),
        s = t(5),
        c = t(0),
        u = t(3),
        l = t(6),
        f = t(0),
        p = t(4),
        d = t(16),
        g = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { waitTimer: void 0 }), t;
          }
          var t;
          return (
            o(e, n),
            (t = e),
            (e.prototype.componentWillReceiveProps = function(n) {
              if (this.props.timeoutSeconds !== n.timeoutSeconds) {
                var e = n.timeoutSeconds,
                  t = setTimeout(function() {
                    u.Actions.setEngagementStage(l.TIMEOUT_ENGAGEMENT), u.Actions.cancelTask();
                  }, 1e3 * e);
                this.setState({ waitTimer: t });
              }
            }),
            (e.prototype.handleCancelButtonClick = function() {
              u.Actions.cancelTask(), u.Actions.setEngagementStage(l.PRE_ENGAGEMENT);
            }),
            (e.prototype.componentWillUnmount = function() {
              clearTimeout(this.state.waitTimer);
            }),
            (e.prototype.render = function() {
              var n = this;
              return a.createElement(
                c.DynamicComponent,
                {
                  contentStore: t.Content,
                  childProps: this.props,
                  name: t.friendlyName,
                  customChildren: this.props.children,
                  vertical: !0,
                },
                a.createElement(
                  v,
                  { className: 'Twilio-PendingEngagement' },
                  a.createElement(
                    b,
                    { key: 'container', className: 'Twilio-CenterContentContainer' },
                    a.createElement(T, { icon: 'Message' }),
                    a.createElement(
                      P,
                      null,
                      a.createElement(
                        w,
                        null,
                        a.createElement(d.Template, {
                          source: d.templates.PendingEngagementMessage,
                        })
                      )
                    ),
                    this.props.cancelEngagementUrl &&
                      a.createElement(
                        O,
                        null,
                        a.createElement(
                          S,
                          {
                            disabled: !this.props.taskSid,
                            onClick: function() {
                              return n.handleCancelButtonClick();
                            },
                          },
                          a.createElement(d.Template, {
                            source: d.templates.PendingEngagementCancelButton,
                          })
                        )
                      )
                  )
                )
              );
            }),
            (e.friendlyName = 'PendingEngagementCanvas'),
            (e.displayName = t.friendlyName),
            (e.Content = new c.DynamicContentStore(t.friendlyName)),
            (e = t = i(
              [
                p.withTheme,
                s.connect(function(n) {
                  return {
                    taskSid: n.flex.session.taskSid,
                    timeoutSeconds: n.flex.session.waitingTimeoutSeconds,
                    cancelEngagementUrl: n.flex.config.cancelEngagementUrl,
                  };
                }),
              ],
              e
            ))
          );
        })(a.PureComponent);
      e.PendingEngagementCanvas = g;
      var h,
        m,
        y,
        E,
        _,
        C,
        x,
        v = p.default('div')(
          h ||
            (h = r(
              [
                '\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin: auto;\n    width: 100%;\n\n    ',
                ';\n',
              ],
              [
                '\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin: auto;\n    width: 100%;\n\n    ',
                ';\n',
              ]
            )),
          function(n) {
            return n.theme.PendingEngagementCanvas.Container;
          }
        ),
        b = p.default('div')(
          m ||
            (m = r(
              [
                '\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin: auto;\n    width: 100%;\n\n',
              ],
              [
                '\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin: auto;\n    width: 100%;\n\n',
              ]
            ))
        ),
        T = p.default(f.Icon)(
          y ||
            (y = r(
              ['\n    flex-grow: 0;\n    flex-shrink: 1;\n    flex-basis: 3%;\n'],
              ['\n    flex-grow: 0;\n    flex-shrink: 1;\n    flex-basis: 3%;\n']
            ))
        ),
        P = p.default('div')(
          E || (E = r(['\n    margin-top: 10px;\n'], ['\n    margin-top: 10px;\n']))
        ),
        w = p.default('div')(
          _ ||
            (_ = r(
              [
                '\n    font-size: 12px;\n    font-weight: lighter;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    margin: auto;\n    width: 223px;\n',
              ],
              [
                '\n    font-size: 12px;\n    font-weight: lighter;\n    line-height: 1.33;\n    letter-spacing: normal;\n    text-align: center;\n    margin: auto;\n    width: 223px;\n',
              ]
            ))
        ),
        O = p.default('div')(
          C ||
            (C = r(
              ['\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n'],
              ['\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n']
            ))
        ),
        S = p.default('button')(
          x ||
            (x = r(
              [
                '\n\n    background: ',
                ';\n    color: ',
                ';\n    border: 0;\n    box-shadow: none;\n    width: 100px;\n    border-radius: 14px;\n    padding: 6px 0px 5px 0px;\n    font-size: 12px;\n    font-weight: 400;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    opacity: 1;\n\n    :disabled {\n        opacity: .5;\n    }\n',
              ],
              [
                '\n\n    background: ',
                ';\n    color: ',
                ';\n    border: 0;\n    box-shadow: none;\n    width: 100px;\n    border-radius: 14px;\n    padding: 6px 0px 5px 0px;\n    font-size: 12px;\n    font-weight: 400;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    opacity: 1;\n\n    :disabled {\n        opacity: .5;\n    }\n',
              ]
            )),
          function(n) {
            return n.theme.PendingEngagementCanvas.CancelButton.background;
          },
          function(n) {
            return n.theme.PendingEngagementCanvas.CancelButton.color;
          }
        );
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        t(33),
        t(34),
        t(35),
        (function(n) {
          for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
        })(t(36));
    },
    function(n, e) {
      n.exports = require('core-js/fn/symbol');
    },
    function(n, e) {
      n.exports = require('core-js/fn/symbol/iterator');
    },
    function(n, e) {
      n.exports = require('core-js/fn/object/assign');
    },
    function(n, e, t) {
      'use strict';
      function o(n) {
        for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        o(t(37)),
        o(t(17)),
        o(t(24)),
        o(t(66)),
        o(t(15));
      var r = t(15);
      (e.Strings = r.Strings), (e.languages = r.languages), o(t(67)), o(t(13));
      var i = t(13);
      (e.ThemeDef = i.ThemeDef), t(69);
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(2),
        r = t(17);
      e.createWebChat = function(n) {
        return (
          void 0 === n && (n = void 0),
          r.FlexWebChat.create(n).catch(function(n) {
            return o.default.error(n), Promise.reject(n);
          })
        );
      };
    },
    function(n, e) {
      n.exports = require('loglevel');
    },
    function(n, e) {
      n.exports = require('react-dom');
    },
    function(n, e) {
      n.exports = require('twilio-chat');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(6);
      (e.setIdentity = function(n) {
        return { type: o.ACTION_SET_IDENTITY, identity: n };
      }),
        (e.setChannelSid = function(n) {
          return { type: o.ACTION_SET_CHANNEL_SID, channelSid: n };
        }),
        (e.setAccessToken = function(n) {
          return { type: o.ACTION_SET_ACCESS_TOKEN, accessToken: n };
        }),
        (e.toggleEntryPoint = function() {
          return { type: o.ACTION_TOGGLE_ENTRY_POINT };
        }),
        (e.setEntryPointExpanded = function(n) {
          return { type: o.ACTION_SET_ENTRY_POINT_EXPANDED, isEntryPointExpanded: n };
        }),
        (e.setEngagementStage = function(n) {
          return { type: o.ACTION_SET_ENGAGEMENT_STAGE, engagementStage: n };
        }),
        (e.setTaskSid = function(n) {
          return { type: o.ACTION_SET_TASK_SID, taskSid: n };
        }),
        (e.initSession = function(n) {
          return { type: o.ACTION_INIT_SESSION, identity: n };
        }),
        (e.setDisableLocalStorage = function() {
          return { type: o.ACTION_SET_DISABLE_LOCAL_STORAGE };
        }),
        (e.setPreEngagementReady = function(n) {
          return { type: o.ACTION_SET_PRE_ENGAGEMENT_READY, preEngagementReady: n };
        }),
        (e.setAvatar = function(n, e) {
          return { type: o.ACTION_SET_AVATAR, identity: n, avatar: e };
        }),
        (e.setWaitSetTimeOut = function(n) {
          return { type: o.ACTION_SET_WAIT_SET_TIMEOUT, waitingTimeout: n };
        });
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(2),
        r = (function() {
          function n() {}
          return (
            (n.urlEncodeNestedJson = function(n, e) {
              if ((void 0 === e && (e = ''), 'object' != typeof n))
                return o.default.error('"srcJson" is not a JSON object'), null;
              for (var t = '', r = Object.keys(n), i = 0; i < r.length; i++) {
                var a = e ? e + '[' + r[i] + ']' : r[i];
                'object' != typeof n[r[i]]
                  ? (t += encodeURIComponent(a) + '=' + encodeURIComponent(n[r[i]]))
                  : (t += this.urlEncodeNestedJson(n[r[i]], a)),
                  i < r.length - 1 && (t += '&');
              }
              return t;
            }),
            n
          );
        })();
      e.StateHelper = r;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(12),
        r = t(7),
        i = t(3),
        a = t(2),
        s = (function() {
          function n() {}
          return (
            (n.fetchToken = function(n) {
              void 0 === n && (n = !1);
              var e = r.CFModule.state.config.accountSid;
              if (!e) return Promise.reject('Please set accountSid in configuration');
              var t,
                i = r.CFModule.state.config.tokenServerUrl.replace('{accountSid}', e);
              if (n) {
                i += '/refresh';
                var a =
                  r.CFModule.state.session.tokenPayload &&
                  r.CFModule.state.session.tokenPayload.token;
                if (!a) return Promise.reject('No old token');
                t = { token: a };
              } else t = { products: ['flex'] };
              return o.default.post(i, t).then(function(n) {
                return n.data;
              });
            }),
            (n.getAccessToken = function() {
              var n = r.CFModule.state.session.tokenPayload;
              return this.isValidTokenPayload(n)
                ? Promise.resolve(n)
                : this.fetchToken()
                    .then(function(n) {
                      return i.Actions.setAccessToken(n), n;
                    })
                    .catch(function(n) {
                      throw (a.default.error('error fetching token or initAccessManager', n), n);
                    });
            }),
            (n.refreshAccessToken = function() {
              a.default.debug('access manager asked to refresh token');
              var e = r.CFModule.state.session.tokenPayload;
              return n.isValidTokenPayload(e)
                ? n
                    .fetchToken(!0)
                    .then(function(n) {
                      i.Actions.setAccessToken(n),
                        r.CFModule.chatClient.updateToken(n.token),
                        a.default.info('token refreshed');
                    })
                    .catch(function(n) {
                      return a.default.error(n);
                    })
                : Promise.reject('Existing token is not valid');
            }),
            (n.isValidTokenPayload = function(n) {
              if (!n) return !1;
              var e = n.expiration,
                t = n.identity,
                o = n.roles,
                r = n.token;
              return !(!e || !t || !o || !r || this.isTokenExpired(n));
            }),
            (n.isTokenExpired = function(n, e) {
              void 0 === e && (e = 0);
              var t = n.expiration;
              if (!t || 'string' != typeof t) return !0;
              var o = (Date.parse(t) || 0) - e > Date.now();
              return o || a.default.debug('Token has expired'), !o;
            }),
            n
          );
        })();
      e.TokenHelper = s;
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(0),
        i = t(9),
        a = { colors: o({}, i.default.colors, r.MediumTheme.colors), lightTheme: !0 };
      e.default = a;
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(0),
        i = t(9),
        a = { colors: o({}, i.default.colors, r.DarkTheme.colors), lightTheme: !1 };
      e.default = a;
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(0),
        i = t(9),
        a = { colors: o({}, i.default.colors, r.BlueDarkTheme.colors), lightTheme: !1 };
      e.default = a;
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(0),
        i = t(9),
        a = { colors: o({}, i.default.colors, r.BlueMediumTheme.colors), lightTheme: !0 };
      e.default = a;
    },
    function(n, e) {
      n.exports = require('@material-ui/core/styles');
    },
    function(n, e) {
      n.exports = require('redux-logger');
    },
    function(n, e) {
      n.exports = require('redux-promise-middleware');
    },
    function(n, e) {
      n.exports = require('lodash/throttle');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(22),
        r = t(14),
        i = t(3),
        a = t(0),
        s = o.combineReducers({ config: r.reduce, session: i.reduce, chat: a.chatReducer });
      e.CFReducer = s;
      window.CFReducer = s;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(11);
      e.initConfig = function(n) {
        return { type: o.ACTION_INIT_CONFIG, config: n };
      };
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(2);
      (e.loadState = function() {
        try {
          var n = localStorage.getItem('twilio-flex-cf');
          if (null === n) return;
          return JSON.parse(n);
        } catch (n) {
          return;
        }
      }),
        (e.saveState = function(n) {
          try {
            var e = JSON.stringify(n);
            localStorage.setItem('twilio-flex-cf', e);
          } catch (n) {
            o.default.warn('cf: problem saving to localStorage');
          }
        });
    },
    function(n, e, t) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function() {
          return (o =
            Object.assign ||
            function(n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = t(0),
        i = o({}, r.languages.default, {
          Connecting: 'Connecting …',
          Disconnected: 'Connection lost',
          PendingEngagementMessage: 'Please wait while we connect you to an available agent',
          PendingEngagementCancelButton: 'Cancel',
          ConfirmEndEngagementMessage: 'Are you sure you want to end this chat?',
          ConfirmEndEngagementConfirmButton: "Yes, I'm done",
          ConfirmEndEngagementDenyButton: 'No, take me back',
          PreEngagementMandatoryFieldMessage: 'Mandatory field *',
          DefaultPreEngagementConfigDescription: 'Hi there.  Please fill out this form to start.',
          DefaultPreEngagementConfigNameLabel: 'Name',
          DefaultPreEngagementConfigEmailLabel: 'Email',
          DefaultPreEngagementConfigSubmitButton: 'Submit',
          MessageCanvasTrayContent:
            '\n        <h6>Thanks for chatting with us!</h6>\n        <p>If you have any more questions please reach out to us again.</p>',
          MessageCanvasTrayButton: 'START NEW CHAT',
        });
      e.default = i;
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getPageContext = function() {
          try {
            return { location: window.location.href };
          } catch (n) {
            return;
          }
        });
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(3),
        r = t(0),
        i = {
          language: 'en-US',
          disableLocalStorage: !1,
          available: !0,
          colorTheme: { baseName: 'BlueMediumTheme' },
          canvasBottom: '74px',
          preEngagementConfig: {
            description: 'Please provide some information',
            fields: [
              {
                label: 'What is your name?',
                type: 'InputItem',
                attributes: {
                  name: 'friendlyName',
                  type: 'text',
                  placeholder: 'Name',
                  required: !1,
                },
              },
              {
                label: "What's your question?",
                type: 'TextareaItem',
                attributes: { name: 'question', rows: 6, required: !1 },
              },
            ],
            submitLabel: "LET'S GO!",
          },
          timeoutEngagementConfig: {
            description: 'Apologies. No agents are available.',
            message: 'Thanks for waiting.',
            fields: [],
            submitLabel: 'Okay',
          },
          componentProps: {
            MessagingCanvas: {
              avatarCallback: function(n) {
                return o.Actions.getAgentAvatar(n);
              },
              showTrayOnInactive: !0,
            },
            MessageCanvasTray: {
              onButtonClick: function() {
                return r.Actions.invokeAction('RestartEngagement');
              },
            },
          },
          tokenServerUrl: 'https://preview.twilio.com/iam/Accounts/{accountSid}/Tokens',
          flexWebChannelsUrl: 'https://preview.twilio.com/Flex/WebChannels',
        };
      e.default = i;
    },
    function(n, e) {
      n.exports = require('create-emotion-styled');
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        r =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }).apply(this, arguments);
          },
        a =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var s,
        c = t(1),
        u = t(4),
        l = u.default('path')(s || (s = o(['\n  ', '\n'], ['\n  ', '\n'])), function(n) {
          return n.theme.MainHeader.Logo;
        }),
        f = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          return (
            r(e, n),
            (e.prototype.render = function() {
              return c.createElement(
                'svg',
                i({ viewBox: '0 0 24 24', width: '24px', height: '24px' }, this.props),
                c.createElement(
                  'g',
                  { fill: 'none', fillRule: 'evenodd' },
                  c.createElement('path', { d: 'M0 0h24v24H0z' }),
                  c.createElement(l, {
                    d:
                      'M4.852 10.253l4.324 4.325a.499.499 0 0 1 .146.353v4.568a.5.5 0 0 1-.852.354l-4.324-4.326A.495.495 0 0 1 4 15.174v-4.568a.5.5 0 0 1 .852-.353zM4.503 4h10.673c.132 0 .26.052.352.146l4.325 4.325a.5.5 0 0 1-.353.852H9.321a.49.49 0 0 0 0 .978h3.306c.132 0 .26.052.353.145l4.324 4.326a.5.5 0 0 1-.353.852h-5.1a.503.503 0 0 1-.353-.146l-7.352-7.34A.495.495 0 0 1 4 7.785V4.503C4 4.225 4.226 4 4.503 4z',
                  })
                )
              );
            }),
            (e = a([u.withTheme], e))
          );
        })(c.PureComponent);
      e.FlexLogo = f;
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = t(1),
        a = t(8),
        s = t(3),
        c = t(0),
        u = t(7),
        l = t(2),
        f = t(4),
        p = (function(n) {
          function e() {
            var e = (null !== n && n.apply(this, arguments)) || this;
            return (
              (e.submitPostEngagement = function(n, e) {
                var t = e || 'timeoutEngagement';
                s.Actions.updateEngagement(n, t)
                  .then(function(n) {
                    s.Actions.setEntryPointExpanded(!1), a.Actions.leaveChat();
                  })
                  .catch(function(n) {
                    s.Actions.setEntryPointExpanded(!1),
                      a.Actions.leaveChat(),
                      l.default.error(
                        'There was an issue submitting the ' + t + ' engagement form.'
                      );
                  });
              }),
              e
            );
          }
          return (
            o(e, n),
            (e.prototype.render = function() {
              return u.CFModule.state.config.timeoutEngagementConfig
                ? i.createElement(
                    g,
                    null,
                    i.createElement(c.DynamicForm, {
                      submitFormCallback: this.submitPostEngagement,
                      formAttributes: u.CFModule.state.config.timeoutEngagementConfig,
                    })
                  )
                : null;
            }),
            e
          );
        })(i.PureComponent);
      e.TimeoutEngagementCanvas = p;
      var d,
        g = f.default('div')(
          d ||
            (d = r(
              [
                '\n    flex: 1;\n    color: white;\n    background: ',
                ';\n\n    margin: auto;\n    height: 460px;\n    width: 100%;\n\n    input, textarea {\n        box-sizing:border-box\n    }\n\n    .Twilio-DynamicForm {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        background: ',
                ';\n\n        p {\n            color: ',
                ';\n            font-size: 18px;\n            width: 232px;\n            font-weight: lighter;\n            line-height: 1.33;\n            letter-spacing: normal;\n            text-align: center;\n            margin-top: 74px;\n        }\n\n        .message {\n            margin-top: 30px;\n\n            p {\n                margin-top: 10px;\n                font-size: 12px;\n                font-weight: lighter;\n                line-height: 1.33;\n                letter-spacing: normal;\n                text-align: center;\n                margin: auto;\n                width: 223px;\n            }\n        }\n\n        .label p {\n            width: 181.5px;\n            height: 32px;\n            font-size: 12px;\n            font-weight: 300;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: 1.4;\n            letter-spacing: .3px;\n            text-align: center;\n            color: ',
                ';\n            margin: auto;\n        }\n\n        .circle {\n            margin: 6px;\n        }\n\n        .circle-selected {\n            margin: 6px;\n        }\n\n        .ItemGroup {\n            display: flex;\n            margin-top: 17px;\n        }\n\n        button {\n            background: ',
                ';\n            color: ',
                ';\n            border: 0;\n            box-shadow: none;\n            height: 36px;\n            width: 144px;\n            border-radius: 3px;\n            margin-top: 16px;\n\n            font-size: 12px;\n            font-weight: 400;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n\n            opacity: 1;\n\n            &[disabled] {\n            opacity: 0.5;\n            }\n        }\n\n        textarea {\n            width: 232px;\n            margin: auto;\n            margin-top: 16px;\n            box-sizing: initial;\n            border: solid 1px #6E7180;\n            background: rgb(35, 54, 89);\n            padding: 8px;\n            color: white;\n        }\n\n    }\n',
              ],
              [
                '\n    flex: 1;\n    color: white;\n    background: ',
                ';\n\n    margin: auto;\n    height: 460px;\n    width: 100%;\n\n    input, textarea {\n        box-sizing:border-box\n    }\n\n    .Twilio-DynamicForm {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        background: ',
                ';\n\n        p {\n            color: ',
                ';\n            font-size: 18px;\n            width: 232px;\n            font-weight: lighter;\n            line-height: 1.33;\n            letter-spacing: normal;\n            text-align: center;\n            margin-top: 74px;\n        }\n\n        .message {\n            margin-top: 30px;\n\n            p {\n                margin-top: 10px;\n                font-size: 12px;\n                font-weight: lighter;\n                line-height: 1.33;\n                letter-spacing: normal;\n                text-align: center;\n                margin: auto;\n                width: 223px;\n            }\n        }\n\n        .label p {\n            width: 181.5px;\n            height: 32px;\n            font-size: 12px;\n            font-weight: 300;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: 1.4;\n            letter-spacing: .3px;\n            text-align: center;\n            color: ',
                ';\n            margin: auto;\n        }\n\n        .circle {\n            margin: 6px;\n        }\n\n        .circle-selected {\n            margin: 6px;\n        }\n\n        .ItemGroup {\n            display: flex;\n            margin-top: 17px;\n        }\n\n        button {\n            background: ',
                ';\n            color: ',
                ';\n            border: 0;\n            box-shadow: none;\n            height: 36px;\n            width: 144px;\n            border-radius: 3px;\n            margin-top: 16px;\n\n            font-size: 12px;\n            font-weight: 400;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n\n            opacity: 1;\n\n            &[disabled] {\n            opacity: 0.5;\n            }\n        }\n\n        textarea {\n            width: 232px;\n            margin: auto;\n            margin-top: 16px;\n            box-sizing: initial;\n            border: solid 1px #6E7180;\n            background: rgb(35, 54, 89);\n            padding: 8px;\n            color: white;\n        }\n\n    }\n',
              ]
            )),
          function(n) {
            return n.theme.TimeoutEngagementCanvas.Container.background;
          },
          function(n) {
            return n.theme.TimeoutEngagementCanvas.Container.background;
          },
          function(n) {
            return n.theme.TimeoutEngagementCanvas.Container.color;
          },
          function(n) {
            return n.theme.TimeoutEngagementCanvas.Container.color;
          },
          function(n) {
            return n.theme.Modal.PrimaryButton.background;
          },
          function(n) {
            return n.theme.Modal.PrimaryButton.color;
          }
        );
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = t(1),
        a = t(3),
        s = t(8),
        c = t(10),
        u = t(4),
        l = t(16),
        f = (function(n) {
          function e() {
            return (null !== n && n.apply(this, arguments)) || this;
          }
          return (
            o(e, n),
            (e.prototype.render = function() {
              return i.createElement(
                y,
                { className: 'Twilio-ConfirmEndEngagementCanvas' },
                i.createElement(
                  E,
                  { className: 'Twilio-ConfirmEndEngagementCanvas-Title' },
                  i.createElement(
                    'p',
                    null,
                    i.createElement(l.Template, { source: l.templates.ConfirmEndEngagementMessage })
                  )
                ),
                i.createElement(
                  _,
                  null,
                  i.createElement(
                    C,
                    {
                      onClick: function() {
                        return s.Actions.endChat();
                      },
                    },
                    i.createElement(l.Template, {
                      source: l.templates.ConfirmEndEngagementConfirmButton,
                    })
                  ),
                  i.createElement(
                    x,
                    {
                      onClick: function() {
                        return a.Actions.setEngagementStage(c.IN_ENGAGEMENT);
                      },
                    },
                    i.createElement(l.Template, {
                      source: l.templates.ConfirmEndEngagementDenyButton,
                    })
                  )
                )
              );
            }),
            e
          );
        })(i.PureComponent);
      e.ConfirmEndEngagementCanvas = f;
      var p,
        d,
        g,
        h,
        m,
        y = u.default('div')(
          p ||
            (p = r(
              [
                '\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin: auto;\n    width: 100%;\n\n    background: ',
                ';\n\n    .title {\n        margin-top: 74px;\n        p {\n            color: white;\n            font-size: 18px;\n            width: 210px;\n            font-weight: lighter;\n            line-height: 1.33;\n            letter-spacing: normal;\n            text-align: center;\n            margin: auto;\n        }\n    }\n',
              ],
              [
                '\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin: auto;\n    width: 100%;\n\n    background: ',
                ';\n\n    .title {\n        margin-top: 74px;\n        p {\n            color: white;\n            font-size: 18px;\n            width: 210px;\n            font-weight: lighter;\n            line-height: 1.33;\n            letter-spacing: normal;\n            text-align: center;\n            margin: auto;\n        }\n    }\n',
              ]
            )),
          function(n) {
            return n.theme.Modal.Container.background;
          }
        ),
        E = u.default('div')(
          d ||
            (d = r(
              [
                '\n    margin-top: 74px;\n\n    p {\n        color: white;\n        font-size: 18px;\n        width: 210px;\n        font-weight: lighter;\n        line-height: 1.33;\n        letter-spacing: normal;\n        text-align: center;\n        margin: auto;\n        ',
                ';\n    }\n',
              ],
              [
                '\n    margin-top: 74px;\n\n    p {\n        color: white;\n        font-size: 18px;\n        width: 210px;\n        font-weight: lighter;\n        line-height: 1.33;\n        letter-spacing: normal;\n        text-align: center;\n        margin: auto;\n        ',
                ';\n    }\n',
              ]
            )),
          function(n) {
            return n.theme.Modal.Title;
          }
        ),
        _ = u.default('div')(
          g ||
            (g = r(
              [
                '\n    display: flex;\n    justify-content: center;\n    margin-top: 13px;\n    flex-direction: column;\n\n    button {\n        border: 0;\n        box-shadow: none;\n        height: 36px;\n        width: 144px;\n        border-radius: 3px;\n        margin-top: 8px;\n\n        font-size: 12px;\n        font-weight: 400;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: normal;\n        letter-spacing: normal;\n    }\n',
              ],
              [
                '\n    display: flex;\n    justify-content: center;\n    margin-top: 13px;\n    flex-direction: column;\n\n    button {\n        border: 0;\n        box-shadow: none;\n        height: 36px;\n        width: 144px;\n        border-radius: 3px;\n        margin-top: 8px;\n\n        font-size: 12px;\n        font-weight: 400;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: normal;\n        letter-spacing: normal;\n    }\n',
              ]
            ))
        ),
        C = u.default('button')(
          h ||
            (h = r(
              ['\n    background: ', ';\n    color: ', ';\n'],
              ['\n    background: ', ';\n    color: ', ';\n']
            )),
          function(n) {
            return n.theme.Modal.PrimaryButton.background;
          },
          function(n) {
            return n.theme.Modal.PrimaryButton.color;
          }
        ),
        x = u.default('button')(
          m ||
            (m = r(
              ['\n    background: ', ';\n    color: ', ';\n'],
              ['\n    background: ', ';\n    color: ', ';\n']
            )),
          function(n) {
            return n.theme.Modal.SecondaryButton.background;
          },
          function(n) {
            return n.theme.Modal.SecondaryButton.color;
          }
        );
    },
    function(n, e, t) {
      'use strict';
      var o =
          (this && this.__extends) ||
          (function() {
            var n = function(e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(n, e) {
                    n.__proto__ = e;
                  }) ||
                function(n, e) {
                  for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                })(e, t);
            };
            return function(e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
            };
          })(),
        r =
          (this && this.__makeTemplateObject) ||
          function(n, e) {
            return (
              Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n
            );
          },
        i =
          (this && this.__decorate) ||
          function(n, e, t, o) {
            var r,
              i = arguments.length,
              a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, t)) : o;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              a = Reflect.decorate(n, e, t, o);
            else
              for (var s = n.length - 1; s >= 0; s--)
                (r = n[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, t, a) : r(e, t)) || a);
            return i > 3 && a && Object.defineProperty(e, t, a), a;
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = t(1),
        s = t(5),
        c = t(0),
        u = t(8),
        l = t(3),
        f = t(4),
        p = t(2),
        d = (function(n) {
          function e() {
            var e = (null !== n && n.apply(this, arguments)) || this;
            return (
              (e.submitPostEngagement = function(n, e) {
                var t = e || 'postEngagement';
                l.Actions.updateEngagement(n, t)
                  .then(function(n) {
                    l.Actions.setEntryPointExpanded(!1), u.Actions.leaveChat();
                  })
                  .catch(function(n) {
                    l.Actions.setEntryPointExpanded(!1),
                      u.Actions.leaveChat(),
                      p.default.warn('There was an issue submitting the post engagement form.');
                  });
              }),
              e
            );
          }
          return (
            o(e, n),
            (e.prototype.render = function() {
              return this.props.postEngagementConfig
                ? a.createElement(
                    h,
                    null,
                    a.createElement(c.DynamicForm, {
                      submitFormCallback: this.submitPostEngagement,
                      formAttributes: this.props.postEngagementConfig,
                    })
                  )
                : null;
            }),
            (e = i(
              [
                f.withTheme,
                s.connect(function(n) {
                  return { postEngagementConfig: n.flex.config.postEngagementConfig };
                }),
              ],
              e
            ))
          );
        })(a.PureComponent);
      e.PostEngagementCanvas = d;
      var g,
        h = f.default('div')(
          g ||
            (g = r(
              [
                '\n    flex: 1;\n    color: white;\n    background: ',
                ';\n\n    input, textarea {\n        box-sizing:border-box\n    }\n\n    .Twilio-DynamicForm {\n        background: ',
                ';\n\n        .Twilio-ThumbsUpThumbsDown {\n            background: ',
                ';\n            color: ',
                ';\n        }\n\n        p {\n          color: ',
                ';\n          font-size: 18px;\n          width: 232px;\n          font-weight: lighter;\n          line-height: 1.33;\n          letter-spacing: normal;\n          text-align: center;\n          margin: auto;\n          margin-top: 74px;\n        }\n\n        .label p {\n          width: 181.5px;\n          height: 32px;\n          font-size: 12px;\n          font-weight: 300;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.4;\n          letter-spacing: .3px;\n          text-align: center;\n          color: ',
                ';\n          margin: auto;\n        }\n\n        .circle {\n          margin: 6px;\n          ',
                ';\n\n          svg {\n            g {\n                fill: ',
                ';\n            }\n          }\n        }\n\n        .circle-selected {\n          margin: 6px;\n          ',
                ';\n        }\n\n        .ItemGroup {\n          display: flex;\n          margin-top: 17px;\n        }\n\n        button {\n\n          display: flex;\n          justify-content: center;\n          margin: auto;\n          margin-top: 16px;\n          float: unset;\n\n          background: ',
                ';\n          color: ',
                ';\n          border: 0;\n          box-shadow: none;\n          height: 36px;\n          width: 144px;\n          border-radius: 3px;\n\n          font-size: 12px;\n          font-weight: 400;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: normal;\n          letter-spacing: normal;\n\n          opacity: 1;\n\n          &[disabled] {\n            opacity: 0.5;\n          }\n        }\n\n        textarea {\n          width: 232px;\n          margin: auto;\n          margin-top: 16px;\n          box-sizing: initial;\n          border: ',
                ';\n          background: ',
                ';\n          padding: 8px;\n          color: ',
                ';\n        }\n\n        textarea:focus {\n          outline: none !important;\n          border:1px solid ',
                ';\n        }\n\n        textarea::placeholder {\n          color: ',
                ';\n        }\n\n      }\n',
              ],
              [
                '\n    flex: 1;\n    color: white;\n    background: ',
                ';\n\n    input, textarea {\n        box-sizing:border-box\n    }\n\n    .Twilio-DynamicForm {\n        background: ',
                ';\n\n        .Twilio-ThumbsUpThumbsDown {\n            background: ',
                ';\n            color: ',
                ';\n        }\n\n        p {\n          color: ',
                ';\n          font-size: 18px;\n          width: 232px;\n          font-weight: lighter;\n          line-height: 1.33;\n          letter-spacing: normal;\n          text-align: center;\n          margin: auto;\n          margin-top: 74px;\n        }\n\n        .label p {\n          width: 181.5px;\n          height: 32px;\n          font-size: 12px;\n          font-weight: 300;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.4;\n          letter-spacing: .3px;\n          text-align: center;\n          color: ',
                ';\n          margin: auto;\n        }\n\n        .circle {\n          margin: 6px;\n          ',
                ';\n\n          svg {\n            g {\n                fill: ',
                ';\n            }\n          }\n        }\n\n        .circle-selected {\n          margin: 6px;\n          ',
                ';\n        }\n\n        .ItemGroup {\n          display: flex;\n          margin-top: 17px;\n        }\n\n        button {\n\n          display: flex;\n          justify-content: center;\n          margin: auto;\n          margin-top: 16px;\n          float: unset;\n\n          background: ',
                ';\n          color: ',
                ';\n          border: 0;\n          box-shadow: none;\n          height: 36px;\n          width: 144px;\n          border-radius: 3px;\n\n          font-size: 12px;\n          font-weight: 400;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: normal;\n          letter-spacing: normal;\n\n          opacity: 1;\n\n          &[disabled] {\n            opacity: 0.5;\n          }\n        }\n\n        textarea {\n          width: 232px;\n          margin: auto;\n          margin-top: 16px;\n          box-sizing: initial;\n          border: ',
                ';\n          background: ',
                ';\n          padding: 8px;\n          color: ',
                ';\n        }\n\n        textarea:focus {\n          outline: none !important;\n          border:1px solid ',
                ';\n        }\n\n        textarea::placeholder {\n          color: ',
                ';\n        }\n\n      }\n',
              ]
            )),
          function(n) {
            return n.theme.PostEngagementCanvas.Container.background || '#233659';
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.background;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.background;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.color;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.color;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.color;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.DynamicForm.ThumbsUpOrDown;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.DynamicForm.ThumbsUpOrDown.color;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.DynamicForm.ThumbsUpOrDownSelected;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.DynamicForm.SubmitButton.background || '#444444';
          },
          function(n) {
            return n.theme.PostEngagementCanvas.DynamicForm.SubmitButton.color || '#FFFFFF';
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.border;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.DynamicForm.TextArea.background;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.color;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.Container.color;
          },
          function(n) {
            return n.theme.PostEngagementCanvas.DynamicForm.Placeholder.color;
          }
        );
    },
    function(n, e) {
      n.exports = require('react-draggable');
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.VERSION = '1.0.0');
    },
    function(n, e, t) {
      'use strict';
      function o(n) {
        for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), o(t(23)), o(t(18)), o(t(19));
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(14);
      (e.AppConfig = o),
        (function(n) {
          for (var t in n) e.hasOwnProperty(t) || (e[t] = n[t]);
        })(t(68));
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
    },
    function(n, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = t(0),
        r = t(3),
        i = t(8),
        a = (function() {
          function n() {}
          return (
            (n.registerActions = function() {
              o.Actions.registerAction('StartEngagement', n.startEngagement),
                o.Actions.registerAction('RestartEngagement', n.restartEngagement),
                o.Actions.registerAction('ToggleChatVisibility', n.toggleChatVisibility),
                o.Actions.registerAction('MinimizeChat', n.minimizeChat);
            }),
            (n.minimizeChat = function() {
              return Promise.resolve(r.Actions.closeClick());
            }),
            (n.toggleChatVisibility = function() {
              return r.Actions.entryPointClick();
            }),
            (n.restartEngagement = function() {
              return Promise.resolve(i.Actions.leaveChat());
            }),
            (n.startEngagement = function(n) {
              return r.Actions.startEngagement(n.formData);
            }),
            n
          );
        })();
      (e.WebChatActions = a), a.registerActions();
    },
  ]);
});
//# sourceMappingURL=twilio-flex-webchat.prod.js.map
