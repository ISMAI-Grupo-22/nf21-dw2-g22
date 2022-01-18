import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Emprego} from '../models';
import {EmpregoRepository} from '../repositories';

export class EmpregoController {
  constructor(
    @repository(EmpregoRepository)
    public empregoRepository : EmpregoRepository,
  ) {}

  @post('/empregos')
  @response(200, {
    description: 'Emprego model instance',
    content: {'application/json': {schema: getModelSchemaRef(Emprego)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Emprego, {
            title: 'NewEmprego',
            exclude: ['id'],
          }),
        },
      },
    })
    emprego: Omit<Emprego, 'id'>,
  ): Promise<Emprego> {
    return this.empregoRepository.create(emprego);
  }

  @get('/empregos/count')
  @response(200, {
    description: 'Emprego model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Emprego) where?: Where<Emprego>,
  ): Promise<Count> {
    return this.empregoRepository.count(where);
  }

  @get('/empregos')
  @response(200, {
    description: 'Array of Emprego model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Emprego, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Emprego) filter?: Filter<Emprego>,
  ): Promise<Emprego[]> {
    return this.empregoRepository.find(filter);
  }

  @patch('/empregos')
  @response(200, {
    description: 'Emprego PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Emprego, {partial: true}),
        },
      },
    })
    emprego: Emprego,
    @param.where(Emprego) where?: Where<Emprego>,
  ): Promise<Count> {
    return this.empregoRepository.updateAll(emprego, where);
  }

  @get('/empregos/{id}')
  @response(200, {
    description: 'Emprego model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Emprego, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Emprego, {exclude: 'where'}) filter?: FilterExcludingWhere<Emprego>
  ): Promise<Emprego> {
    return this.empregoRepository.findById(id, filter);
  }

  @patch('/empregos/{id}')
  @response(204, {
    description: 'Emprego PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Emprego, {partial: true}),
        },
      },
    })
    emprego: Emprego,
  ): Promise<void> {
    await this.empregoRepository.updateById(id, emprego);
  }

  @put('/empregos/{id}')
  @response(204, {
    description: 'Emprego PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() emprego: Emprego,
  ): Promise<void> {
    await this.empregoRepository.replaceById(id, emprego);
  }

  @del('/empregos/{id}')
  @response(204, {
    description: 'Emprego DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empregoRepository.deleteById(id);
  }
}
