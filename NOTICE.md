<!--
 * Copyright (c) 2021,2023 Contributors to the Catena-X Association
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
-->

# Dependencies of Catena-X Knowledge Agents Kit

The following is a simple type of single-level Software-BOM for all official open source products of Catena-X Knowledge Agents. 

* Product - The name of the Epic/Product (* for all)
* Component - The specific sub-component of the Epic/Product (* for all)
* Library/Module - The library or module that the Product/Component is depending on
* Stage - The kind of dependency 
  * Compile - The library is needed to compile the source code of the component into the target artifact (runtime)
  * Test - The library is needed to test the target artifact
  * Packaging - The library is needed to test the target artifact before, while and/or after packaging it
  * Runtime - The library is shipped as a part of the target artifact (runtime)
  * Provided - The library is not shipped as a part of the target artifact, but needed in it runtime
  * All - The library is needed at all Stages
* Version - the version of the library that the component is dependant upon
* License - the license identifier
* Comment - any further remarks on the kind of dependency

| Product | Component | Library/Module  | Version | Stage | License | Comment |
|--- | -- | --- | --- | --- | --- | ---| 
| * | * | [Apache Maven](https://maven.apache.org) | >=3.8 | Compile + Test + Packaging | Apache License 2.0 |     |
| * | * | Docker Engine | >=20.10.17 | Packaging + Provided | Apache License 2.0 |     |
| * | * | [kubernetes](https://kubernetes.io/de/)/[helm](https://helm.sh/) | >=1.20/3.9 | Provided | Apache License 2.0 |     |
| * | * | [Python](https://www.python.org/) | >=3.9 | Test + Packaging + Provided | Zero Clause BSD |     |
| Dataspace | * | [Java Runtime Environment (JRE)](https://de.wikipedia.org/wiki/Java-Laufzeitumgebung) | >=17 | Test + Provided | * | License (GPL, BCL, ...) depends on choosen runtime. |
| Dataspace | * | [Java Development Kit (JDK)](https://de.wikipedia.org/wiki/Java_Development_Kit) | >=17 | Compile + Packaging | * | License (GPL, BCL, ...) depends on choosen kit. |
| Dataspace | * | [Junit Jupiter](https://junit.org) | >=5 | Test | MIT |     |
| Dataspace | * | [Tractus-X EDC Extensions](https://github.com/eclipse-tractusx/knowledge-agents-edc) | >=1.9.5 | All | Apache License 2.0 |     |
| Dataspace | * | [Tractus-X Agent Implementations](https://github.com/eclipse-tractusx/knowledge-agents) | >=1.9.5 | All | Apache License 2.0 |     |
| Dataspace | Mock>Prognosis | [Fastapi](https://fastapi.tiangolo.com/) | >=0.70.0 | All | MIT |     |
| Dataspace | Mock>Prognosis | [Gunicorn](https://gunicorn.org/) | >=20.1.0 | All | MIT |     |
| Dataspace | Mock>Prognosis | [Python Dateutil](https://github.com/dateutil/dateutil) | >=2.8.1 | All | Apache License 2.0 and BSD-3 |     |
| Dataspace | Mock>Prognosis | [Python Multipart](https://github.com/andrew-d/python-multipart) | >=0.0.5 | All | Apache License 2.0 |     |
| Dataspace | Mock>Prognosis | [Uvicorn](https://github.com/encode/uvicorn) | >=0.15.0 | All | BSD-3 |     |
| Dataspace | Mock>Prognosis | [ISort](https://github.com/pycqa/isort) | >=5.10.1 | All | MIT |     |
| Dataspace | Mock>Prognosis | [Pylint](https://github.com/PyCQA/pylint) | >=2.14.3 | Compile | GPL-2 |     |
| Dataspace | Mock>Prognosis | [Pytest](https://github.com/pytest-dev/pytest) | >=6.2.5 | Test | MIT |     |
| Dataspace | Mock>Prognosis | [Pytest-Cov](https://github.com/pytest-dev/pytest-cov) | >=3.0.0 | Test | MIT |     |
| Dataspace | Mock>Prognosis | [Requests](https://github.com/psf/requests) | >=2.28.1 | All | Apache License 2.0 |     |
| Dataspace | Virtualize>Dremio | [Dremio OSS](https://github.com/dremio/dremio-oss) | >=22.1.1 | Runtime | Apache License 2.0 |     |
| Dataspace | Virtualize>Druid | [Apache Druid](https://druid.apache.org/) | >=24 | Runtime | Apache License 2.0 |     |
