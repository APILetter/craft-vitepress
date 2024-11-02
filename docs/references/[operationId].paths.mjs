import { usePaths } from 'vitepress-openapi'
import spec from '../spec.json' assert { type: 'json' }

export default {
    paths() {
        return usePaths({ spec })
            .getPathsByVerbs()
            .map(({ operationId, summary }) => {
                return {
                    params: {
                        operationId,
                        pageTitle: `${summary} - craft content framework`,
                    },
                }
            })
    },
}