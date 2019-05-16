#!/bin/bash

rm -rf ./target
java -jar openapi-generator-cli-3.3.4.jar generate -g spring --model-package com.isep.feedback.api.model --api-package com.isep.feedback.api.server -i src/main/resources/api.yaml -o openapi-gen -DdelegatePattern=true -DhideGenerationTimestamp=true