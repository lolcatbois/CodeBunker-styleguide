((rjsx-mode (eval . (progn
                      (require 'dap-firefox)
                      (dap-register-debug-template "chrome: react debug"
                                                   (list :type "firefox"
                                                         :cwd nil
                                                         :mode "url"
                                                         :request "launch"
                                                         :webRoot "/home/simon/development/CodeBunker-styleguide/styleguide"
                                                         :url "http://localhost:3000"
                                                         :sourceMap "true"
                                                         :name "firefox: react debug"))))))
